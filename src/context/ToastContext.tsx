import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import {
    Toast,
    ToastState,
    ToastOptions,
    ToastVariant,
    ToastContainerProps,
} from '../types';
import { ToastContainer } from '../components/ToastContainer';
import { ToastType } from '../partials/interfaces';

interface ToastContextValue {
    toasts: Toast[];
    addToast: (variant: ToastVariant, title: string, options?: ToastOptions) => string;
    dismissToast: (id: string) => void;
    dismissAll: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

interface ToastProviderProps extends ToastContainerProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
    children,
    position = 'bottom-right',
    theme = 'dark',
    maxVisible = 5,
    gap = 12,
}) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const generateId = (): string => {
        return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    };

    const addToast = useCallback(
        (variant: ToastVariant, title: string, options: ToastOptions = {}): string => {
            const id = options.id || generateId();

            const toast: Toast = {
                id,
                variant,
                title,
                description: options.description,
                duration: options.duration ?? 5000,
                dismissible: options.dismissible ?? true,
                action: options.action,
                icon: options.icon,
                position: options.position ?? position,
                createdAt: Date.now(),
            };

            setToasts((prev) => [...prev, toast]);
            return id;
        },
        [position]
    );

    const dismissToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t: Toast) => t.id !== id));
    }, []);

    const dismissAll = useCallback(() => {
        setToasts([]);
    }, []);

    const contextValue: ToastContextValue = {
        toasts,
        addToast,
        dismissToast,
        dismissAll,
    };

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <ToastContainer
                toasts={toasts}
                onDismiss={dismissToast}
                position={position}
                theme={theme}
                maxVisible={maxVisible}
                gap={gap}
            />
        </ToastContext.Provider>
    );
};

// Toast API (standalone, no Provider needed)
let globalRoot: Root | null = null;
let globalState: ToastState = { toasts: [] };
let globalConfig: ToastContainerProps = {
    position: 'bottom-right',
    theme: 'dark',
    maxVisible: 5,
    gap: 12,
};

function ensureContainer() {
    if (typeof document === 'undefined') return;

    if (!globalRoot) {
        const container = document.createElement('div');
        container.id = 'react-next-toast-root';
        document.body.appendChild(container);
        globalRoot = createRoot(container);
    }

    renderToasts();
}

function renderToasts() {
    if (!globalRoot) return;

    const dismissToast = (id: string) => {
        globalState = {
            ...globalState,
            toasts: globalState.toasts.filter((t: Toast) => t.id !== id),
        };
        renderToasts();
    };

    globalRoot.render(
        <ToastContainer
            toasts={globalState.toasts}
            onDismiss={dismissToast}
            position={globalConfig.position}
            theme={globalConfig.theme}
            maxVisible={globalConfig.maxVisible}
            gap={globalConfig.gap}
        />
    );
}

function generateId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function addToast(variant: ToastVariant, title: string, options: ToastOptions = {}): string {
    ensureContainer();

    const id = options.id || generateId();

    const toast: Toast = {
        id,
        variant,
        title,
        description: options.description,
        duration: options.duration ?? 5000,
        dismissible: options.dismissible ?? true,
        action: options.action,
        icon: options.icon,
        position: options.position ?? globalConfig.position ?? 'bottom-right',
        createdAt: Date.now(),
    };

    globalState = {
        ...globalState,
        toasts: [...globalState.toasts, toast],
    };

    renderToasts();
    return id;
}

function dismissToast(id: string) {
    globalState = {
        ...globalState,
        toasts: globalState.toasts.filter((t: Toast) => t.id !== id),
    };
    renderToasts();
}

function dismissAll() {
    globalState = { toasts: [] };
    renderToasts();
}

// Public Toast API

export interface ToastAPI {
    (title: string, options?: ToastOptions): string;
    success: (title: string, options?: ToastOptions) => string;
    error: (title: string, options?: ToastOptions) => string;
    warning: (title: string, options?: ToastOptions) => string;
    info: (title: string, options?: ToastOptions) => string;
    loading: (title: string, options?: ToastOptions) => string;
    dismiss: (id: string) => void;
    dismissAll: () => void;
    promise: <T>(
        promise: Promise<T>,
        messages: {
            loading: string;
            success: string | ((data: T) => string);
            error: string | ((err: any) => string);
        },
        options?: ToastOptions
    ) => Promise<T>;
    configure: (config: Partial<ToastContainerProps>) => void;
}

export const toast: ToastAPI = Object.assign(
    (title: string, options?: ToastOptions) => addToast('default', title, options),
    {
        success: (title: string, options?: ToastOptions) => addToast(ToastType.SUCCESS, title, options),
        error: (title: string, options?: ToastOptions) => addToast(ToastType.ERROR, title, options),
        warning: (title: string, options?: ToastOptions) => addToast(ToastType.WARNING, title, options),
        info: (title: string, options?: ToastOptions) => addToast(ToastType.INFO, title, options),
        loading: (title: string, options?: ToastOptions) => addToast(ToastType.LOADING, title, { ...options, duration: 0 }),
        dismiss: dismissToast,
        dismissAll,
        promise: async function <T>(
            promise: Promise<T>,
            messages: {
                loading: string;
                success: string | ((data: T) => string);
                error: string | ((err: any) => string);
            },
            options?: ToastOptions
        ): Promise<T> {
            const id = addToast(ToastType.LOADING, messages.loading, { ...options, duration: 0 });

            try {
                const result = await promise;
                dismissToast(id);
                const successMessage = typeof messages.success === 'function'
                    ? messages.success(result)
                    : messages.success;
                addToast(ToastType.SUCCESS, successMessage, options);
                return result;
            } catch (error) {
                dismissToast(id);
                const errorMessage = typeof messages.error === 'function'
                    ? messages.error(error)
                    : messages.error;
                addToast(ToastType.ERROR, errorMessage, options);
                throw error;
            }
        },
        configure: (config: Partial<ToastContainerProps>) => {
            globalConfig = { ...globalConfig, ...config };
            renderToasts();
        },
    }
);

export default toast;

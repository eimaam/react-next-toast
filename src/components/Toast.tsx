import React, { useState, useEffect, useCallback } from 'react';
import { Toast as ToastType } from '../types';
import {
    toastStyles,
    accentLineStyles,
    iconContainerStyles,
    contentStyles,
    titleStyles,
    descriptionStyles,
    actionsStyles,
    actionButtonStyles,
    closeButtonStyles,
} from '../styles/styles';
import { getVariantIcon, CloseIcon } from '../icons/Icons';

interface ToastProps {
    toast: ToastType;
    theme: 'light' | 'dark';
    onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, theme, onDismiss }) => {
    const [isExiting, setIsExiting] = useState<boolean>(false);

    const handleDismiss = useCallback(() => {
        setIsExiting(true);
        setTimeout(() => {
            onDismiss(toast?.id);
        }, 200); // match animation duration
    }, [toast?.id, onDismiss]);

    // auto-dismiss timer
    useEffect(() => {
        if (toast?.duration === 0) return; // persistent toast

        const timer = setTimeout(() => {
            handleDismiss();
        }, toast?.duration);

        return () => clearTimeout(timer);
    }, [toast?.duration, handleDismiss]);

    const handleActionClick = () => {
        toast?.action?.onClick();
        handleDismiss();
    };

    return (
        <div
            style={toastStyles(toast?.variant, theme, isExiting)}
            role="alert"
            aria-live="polite"
            data-toast-id={toast?.id}
        >
            <div style={accentLineStyles(toast?.variant)} />
            <div style={iconContainerStyles(toast?.variant)}>
                {toast?.icon || getVariantIcon(toast?.variant)}
            </div>

            {/* Content */}
            <div style={contentStyles}>
                <p style={titleStyles(theme)}>{toast?.title}</p>
                {toast?.description && (
                    <p style={descriptionStyles(theme)}>{toast?.description}</p>
                )}
            </div>

            {/* Actions */}
            <div style={actionsStyles}>
                {toast.action && (
                    <button
                        style={actionButtonStyles(theme)}
                        onClick={handleActionClick}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                                theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        {toast?.action?.label}
                    </button>
                )}
                {toast.dismissible && (
                    <button
                        style={closeButtonStyles(theme)}
                        onClick={handleDismiss}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.backgroundColor =
                                theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0.6';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                        aria-label="Dismiss notification"
                    >
                        <CloseIcon size={14} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Toast;

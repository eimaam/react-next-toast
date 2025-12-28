import React, { useEffect } from 'react';
import { Toast as ToastType, ToastPosition, ToastContainerProps } from '../types';
import { containerStyles, injectStyles } from '../styles/styles';
import { Toast } from './Toast';

interface InternalToastContainerProps extends ToastContainerProps {
    toasts: ToastType[];
    onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<InternalToastContainerProps> = ({
    toasts,
    onDismiss,
    position = 'bottom-right',
    theme = 'dark',
    maxVisible = 5,
    gap = 12,
}) => {

    // inject keyframe animations on mount
    useEffect(() => {
        injectStyles();


    }, []);

    // group toasts by position
    const groupedToasts = toasts.reduce((acc, toast) => {
        const pos = toast.position || position;
        if (!acc[pos]) acc[pos] = [];
        acc[pos].push(toast);
        return acc;
    }, {} as Record<ToastPosition, ToastType[]>);

    // limit visible toasts per position
    const limitedToasts = Object.entries(groupedToasts).reduce((acc, [pos, toastList]) => {
        acc[pos as ToastPosition] = toastList.slice(-maxVisible);
        return acc;
    }, {} as Record<ToastPosition, ToastType[]>);

    // responsive position adjustment
    const getResponsivePosition = (pos: ToastPosition): ToastPosition => {
        if (typeof window === 'undefined') return pos;

        const isMobile = window.innerWidth < 640;
        if (isMobile && (pos === 'bottom-right' || pos === 'bottom-left')) {
            return 'top-center';
        }
        return pos;
    };

    return (
        <>
            {Object.entries(limitedToasts).map(([pos, toastList]) => {
                const responsivePos = getResponsivePosition(pos as ToastPosition);

                return (
                    <div
                        key={pos}
                        style={containerStyles(responsivePos, theme, gap)}
                        data-toast-container={pos}
                    >
                        {toastList.map((toast) => (
                            <Toast
                                key={toast.id}
                                toast={toast}
                                theme={theme}
                                onDismiss={onDismiss}
                            />
                        ))}
                    </div>
                );
            })}
        </>
    );
};

export default ToastContainer;

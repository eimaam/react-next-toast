export { toast, ToastProvider, useToast } from './context/ToastContext';
export type { ToastAPI } from './context/ToastContext';

// components
export { Toast } from './components/Toast';
export { ToastContainer } from './components/ToastContainer';

// icons
export {
    SuccessIcon,
    ErrorIcon,
    WarningIcon,
    InfoIcon,
    LoadingIcon,
    CloseIcon,
    TrashIcon,
    getVariantIcon,
    Icon, // legacy icon component
} from './icons/Icons';

export type {
    ToastVariant,
    ToastPosition,
    ToastAction,
    ToastOptions,
    Toast as ToastType,
    ToastState,
    ToastContainerProps,
    ToastTheme,
    //legacy types...
    ToastDetail,
} from './types';

export { ToastType as ToastTypeEnum } from './types';

// styles (for advanced customization)
export { colors, theme, injectStyles } from './styles/styles';

// Backwards Compatibility

// legacy showToast API - wraps new toast API..
import { toast } from './context/ToastContext';

/** @deprecated Use `toast` instead */
export const showToast = {
    success: (message: string, duration?: number) =>
        toast.success(message, { duration }),
    error: (message: string, duration?: number) =>
        toast.error(message, { duration }),
    warning: (message: string, duration?: number) =>
        toast.warning(message, { duration }),
    info: (message: string, duration?: number) =>
        toast.info(message, { duration }),
};

// legacy ToastNotification component export
export { default as ToastNotification } from './ToastNotification';

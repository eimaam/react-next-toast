import React from 'react';

// toast Types
export type ToastVariant = 'success' | 'error' | 'warning' | 'info' | 'loading' | 'default';

export type ToastPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

export interface ToastAction {
    label: string;
    onClick: () => void;
}

export interface ToastOptions {
    /** optional description text below the title */
    description?: string;
    /** duration in ms before auto-dismiss. 0 = persistent. Default: 5000 */
    duration?: number;
    /** show close button. Default: true */
    dismissible?: boolean;
    /** action button configuration */
    action?: ToastAction;
    /** custom icon to override default variant icon */
    icon?: React.ReactNode;
    /** unique ID for programmatic control */
    id?: string;
    /** toast position. Default: 'bottom-right' */
    position?: ToastPosition;
}

export interface Toast {
    id: string;
    variant: ToastVariant;
    title: string;
    description?: string;
    duration: number;
    dismissible: boolean;
    action?: ToastAction;
    icon?: React.ReactNode;
    position: ToastPosition;
    createdAt: number;
}

export interface ToastState {
    toasts: Toast[];
}

export type ToastActionType =
    | { type: 'ADD_TOAST'; toast: Toast }
    | { type: 'DISMISS_TOAST'; id: string }
    | { type: 'DISMISS_ALL' };



// legacy types (backwards compatibility)

/** @deprecated Use ToastVariant instead */
export enum ToastType {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
}

/** @deprecated Use toast() with options instead */
export interface ToastDetail {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    backgroundColor?: string;
    textColor?: string;
    position?: 'right' | 'top-right' | 'bottom-right' | 'left' | 'top-left' | 'bottom-left';
    duration?: number;
}

// style types
export interface ToastTheme {
    mode: 'light' | 'dark';
}

export interface ToastContainerProps {
    /** Default position for all toasts. Default: 'bottom-right' */
    position?: ToastPosition;
    /** Theme mode. Default: 'dark' */
    theme?: 'light' | 'dark';
    /** Maximum number of visible toasts. Default: 5 */
    maxVisible?: number;
    /** Gap between stacked toasts in px. Default: 12 */
    gap?: number;
}

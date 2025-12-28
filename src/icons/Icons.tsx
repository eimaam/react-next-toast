import React from 'react';
import { ToastVariant } from '../types';
import { colors, spinnerStyles } from '../styles/styles';

// Icon Components
interface IconProps {
    size?: number;
    color?: string;
}

export const SuccessIcon: React.FC<IconProps> = ({ size = 20, color = colors.success }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="24" height="24" rx="6" fill={color} fillOpacity="0.15" />
        <path
            d="M7.5 12L10.5 15L16.5 9"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const ErrorIcon: React.FC<IconProps> = ({ size = 20, color = colors.error }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.15" />
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
        <path
            d="M12 8V12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="1" fill={color} />
    </svg>
);

export const WarningIcon: React.FC<IconProps> = ({ size = 20, color = colors.warning }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 3L22 20H2L12 3Z"
            fill={color}
            fillOpacity="0.15"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M12 10V14"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle cx="12" cy="17" r="1" fill={color} />
    </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ size = 20, color = colors.info }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.15" />
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
        <circle cx="12" cy="8" r="1" fill={color} />
        <path
            d="M12 11V16"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const LoadingIcon: React.FC<IconProps> = ({ size = 20, color = colors.loading }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={spinnerStyles}
    >
        <circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeOpacity="0.2"
            strokeWidth="2.5"
        />
        <path
            d="M12 2C6.48 2 2 6.48 2 12"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
        />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18 6L6 18M6 6L18 18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ size = 20, color = '#9CA3AF' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 6H21M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10 11V17M14 11V17"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Icon Mapping
export const variantIcons: Record<ToastVariant, React.FC<IconProps>> = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon,
    loading: LoadingIcon,
    default: InfoIcon,
};

export function getVariantIcon(variant: ToastVariant): React.ReactElement {
    const IconComponent = variantIcons[variant] || variantIcons.default;
    return <IconComponent />;
}

// Legacy Icon export (backwards compatibility)
/** @deprecated Use individual icon exports instead */
export const Icon = {
    Success: () => <SuccessIcon />,
    Error: () => <ErrorIcon />,
    Warning: () => <WarningIcon />,
    Info: () => <InfoIcon />,
};

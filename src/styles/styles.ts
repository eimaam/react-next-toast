import React from 'react';
import { ToastVariant } from '../types';

// Design Tokens
export const colors = {
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  loading: '#6366F1',
  default: '#6B7280',
};

export const theme = {
  dark: {
    surface: 'rgba(23, 25, 30, 0.92)',
    surfaceSolid: '#17191E',
    border: 'rgba(255, 255, 255, 0.08)',
    textPrimary: '#FFFFFF',
    textSecondary: '#9CA3AF',
    backdrop: 'rgba(0, 0, 0, 0.4)',
  },
  light: {
    surface: 'rgba(255, 255, 255, 0.92)',
    surfaceSolid: '#FFFFFF',
    border: 'rgba(0, 0, 0, 0.08)',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    backdrop: 'rgba(255, 255, 255, 0.4)',
  },
};

// ============================================================================
// CSS keyframes (injected once)
// ============================================================================
const keyframes = `
@keyframes toast-slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes toast-slide-out-right {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes toast-slide-in-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes toast-slide-out-left {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes toast-slide-in-top {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes toast-slide-in-bottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes toast-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes toast-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

let styleInjected = false;

export function injectStyles(): void {
  if (styleInjected || typeof document === 'undefined') return;

  const style = document.createElement('style');
  style.id = 'react-next-toast-styles';
  style.textContent = keyframes;
  document.head.appendChild(style);
  styleInjected = true;
}

// style objects
export const containerStyles = (
  position: string,
  _themeMode: 'light' | 'dark',
  gap: number
): React.CSSProperties => {
  const isTop = position.startsWith('top');
  const isLeft = position.endsWith('left');
  const isCenter = position.endsWith('center');

  return {
    position: 'fixed',
    zIndex: 999999,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: isTop ? 'column' : 'column-reverse',
    gap: `${gap}px`,
    padding: '16px',
    maxHeight: '100vh',
    boxSizing: 'border-box',
    ...(isTop ? { top: 0 } : { bottom: 0 }),
    ...(isCenter
      ? { left: '50%', transform: 'translateX(-50%)' }
      : isLeft
        ? { left: 0 }
        : { right: 0 }),
  };
};

export const toastStyles = (
  _variant: ToastVariant,
  themeMode: 'light' | 'dark',
  isExiting: boolean
): React.CSSProperties => {
  const t = theme[themeMode];

  return {
    position: 'relative',
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    width: '380px',
    maxWidth: 'calc(100vw - 32px)',
    padding: '14px 16px',
    backgroundColor: t.surface,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${t.border}`,
    borderRadius: '12px',
    boxShadow: themeMode === 'dark'
      ? '0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.2)'
      : '0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
    overflow: 'hidden',
    animation: isExiting
      ? 'toast-slide-out-right 0.2s ease-in forwards'
      : 'toast-slide-in-right 0.3s ease-out',
  };
};

export const accentLineStyles = (
  variant: ToastVariant
): React.CSSProperties => {
  return {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '3px',
    backgroundColor: colors[variant] || colors.default,
    borderRadius: '3px 0 0 3px',
  };
};

export const iconContainerStyles = (
  _variant: ToastVariant
): React.CSSProperties => {
  return {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    marginTop: '1px',
  };
};

export const contentStyles: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
};

export const titleStyles = (themeMode: 'light' | 'dark'): React.CSSProperties => ({
  margin: 0,
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1.4,
  color: theme[themeMode].textPrimary,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
});

export const descriptionStyles = (themeMode: 'light' | 'dark'): React.CSSProperties => ({
  margin: 0,
  fontSize: '13px',
  fontWeight: 400,
  lineHeight: 1.4,
  color: theme[themeMode].textSecondary,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
});

export const actionsStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexShrink: 0,
  marginLeft: 'auto',
};

export const actionButtonStyles = (_themeMode: 'light' | 'dark'): React.CSSProperties => ({
  padding: '6px 12px',
  fontSize: '13px',
  fontWeight: 500,
  color: '#3B82F6',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  transition: 'background-color 0.15s ease',
});

export const closeButtonStyles = (themeMode: 'light' | 'dark'): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  color: theme[themeMode].textSecondary,
  opacity: 0.6,
  transition: 'opacity 0.15s ease, background-color 0.15s ease',
});

export const spinnerStyles: React.CSSProperties = {
  width: '20px',
  height: '20px',
  animation: 'toast-spinner 1s linear infinite',
};

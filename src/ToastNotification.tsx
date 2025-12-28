import React from 'react';
import { ToastDetail, ToastType } from './types';
import { SuccessIcon, ErrorIcon, WarningIcon, InfoIcon } from './icons/Icons';

/**
 * @deprecated This component is preserved for backwards compatibility.
 * Use the new `toast()` API or `<ToastProvider>` for the v3 experience.
 */

const typeToIconMap = {
  [ToastType.SUCCESS]: SuccessIcon,
  [ToastType.ERROR]: ErrorIcon,
  [ToastType.WARNING]: WarningIcon,
  [ToastType.INFO]: InfoIcon,
};

const ToastNotification: React.FC<ToastDetail> = ({
  message,
  backgroundColor,
  textColor,
  type,
  position,
}) => {
  const IconComponent = typeToIconMap[type] || InfoIcon;

  const defaultPositionStyle: React.CSSProperties = {
    top: '30px',
    bottom: '30px',
    right: '10px',
    left: '10px',
  };

  const notificationStyle: React.CSSProperties = {
    position: 'fixed',
    top:
      position === 'top-right' || position === 'top-left' || !position
        ? defaultPositionStyle.top
        : undefined,
    bottom:
      position === 'bottom-right' || position === 'bottom-left' || !position
        ? defaultPositionStyle.bottom
        : undefined,
    right:
      position === 'top-right' || position === 'bottom-right' || !position
        ? defaultPositionStyle.right
        : undefined,
    left:
      position === 'top-left' ||
        position === 'bottom-left' ||
        position === 'left'
        ? defaultPositionStyle.left
        : undefined,
    maxWidth: '30%',
    minWidth: '320px',
    maxHeight: 'max-content',
    backgroundColor:
      backgroundColor ||
      (type === ToastType.SUCCESS
        ? '#10B981'
        : type === ToastType.ERROR
          ? '#EF4444'
          : type === ToastType.WARNING
            ? '#F59E0B'
            : type === ToastType.INFO
              ? '#3B82F6'
              : '#6B7280'),
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingInline: '16px',
    paddingBlock: '14px',
    zIndex: 99999999,
    backdropFilter: 'blur(12px)',
  };

  const messageStyle: React.CSSProperties = {
    color: textColor || '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    maxHeight: '100px',
    overflowX: 'hidden',
    overflowY: 'visible',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre-line',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
  };

  return (
    <div style={notificationStyle} data-toast-container>
      <div style={{ flexShrink: 0 }}>
        <IconComponent size={20} color="#FFFFFF" />
      </div>
      <p
        style={messageStyle}
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
    </div>
  );
};

export default ToastNotification;

import React, { ReactDOM } from "react";
import { TOAST_TYPE, ToastDetail } from "./partials/interfaces";
import SuccessIcon from "./partials/SuccessIcon";
import ErrorIcon from "./partials/ErrorIcon";
import WarningIcon from "./partials/WarningIcon";
import InfoIcon from "./partials/InfoIcon";

const typeToIconMap = {
  [TOAST_TYPE.success]: SuccessIcon,
  [TOAST_TYPE.error]: ErrorIcon,
  [TOAST_TYPE.warning]: WarningIcon,
  [TOAST_TYPE.info]: InfoIcon,
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
    top: "80px",
    bottom: "80px",
    right: "10px",
    left: "10px",
  };

  const notificationStyle: React.CSSProperties = {
    position: "fixed",
    top:
      position === "top-right" || position === "top-left" || !position
        ? defaultPositionStyle.top
        : undefined,
    bottom:
      position === "bottom-right" || position === "bottom-left" || !position
        ? defaultPositionStyle.bottom
        : undefined,
    right:
      position === "top-right" || position === "bottom-right" || !position
        ? defaultPositionStyle.right
        : undefined,
    left:
      position === "top-left" ||
      position === "bottom-left" ||
      position === "left"
        ? defaultPositionStyle.left
        : undefined,
    maxWidth: "100%",
    minWidth: '320px',
    maxHeight: "max-content",
    backgroundColor:
      backgroundColor ||
      (type === TOAST_TYPE.success
        ? "#C2ECC1"
        : type === TOAST_TYPE.error
        ? "#FB8F6D"
        : type === TOAST_TYPE.warning
        ? "#FFC107"
        : type === TOAST_TYPE.info
        ? "#17A2B8"
        : "#6C757D"),
    border: "2px solid #000",
    borderRadius: "8px",
    display: "flex",
    gap: "1rem",
    padding: "0.5rem",
  };

  const messageStyle = {
    color:
      textColor ||
      (type === TOAST_TYPE.success
        ? "#000"
        : type === TOAST_TYPE.error
        ? "#FFF"
        : type === TOAST_TYPE.warning
        ? "#FFF"
        : type === TOAST_TYPE.info
        ? "#FFF"
        : "#000"),
    fontSize: "1rem",
    maxHeight: "100px",
    overflowX: "hidden",
    overflowY: "visible",
    textOverflow: "ellipsis",
    fontWeight: 'bold'
  };

  return (
    <div style={notificationStyle}>
      <div>
        <IconComponent />
      </div>
      <p style={messageStyle}>{message}</p>
    </div>
  );
};

export default ToastNotification;

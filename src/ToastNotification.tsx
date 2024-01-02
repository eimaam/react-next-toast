import React from "react";
import { ToastDetail, ToastType } from "./partials/interfaces";
import { Icon } from "./partials/Icon";

const typeToIconMap = {
  [ToastType.SUCCESS]: Icon.Success,
  [ToastType.ERROR]: Icon.Error,
  [ToastType.WARNING]: Icon.Warning,
  [ToastType.INFO]: Icon.Info,
};

const ToastNotification: React.FC<ToastDetail> = ({
  message,
  backgroundColor,
  textColor,
  type,
  position,
}) => {
  const IconComponent = typeToIconMap[type] || Icon.Info;

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
    maxWidth: "30%",
    minWidth: "320px",
    maxHeight: "max-content",
    backgroundColor:
      backgroundColor ||
      (type === ToastType.SUCCESS
        ? "#C2ECC1"
        : type === ToastType.ERROR
        ? "#FB8F6D"
        : type === ToastType.WARNING
        ? "#FFC107"
        : type === ToastType.INFO
        ? "#17A2B8"
        : "#6C757D"),
    border: "1px solid #000",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    paddingInline: "1rem",
    paddingBlock: "0.5rem",
    zIndex: "99999999"
  };

  const messageStyle: React.CSSProperties = {
    color: textColor || (type === ToastType.SUCCESS ? "#3F3F3D" : "#FFF"),
    fontSize: "14px",
    maxHeight: "100px",
    overflowX: "hidden",
    overflowY: "visible",
    textOverflow: "ellipsis",
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

import React from "react";
import ReactDOM from "react-dom";
import { DefaultMessage, ToastDetail, ToastType } from "./interfaces";
import ToastNotification from "../ToastNotification";

const DEFAULT_DURATION = 5000;

const showToast = {
  success: (message: string, duration?: number) =>
    showToastComponent({
      type: ToastType.SUCCESS,
      message: message || DefaultMessage.SUCCESS,
      duration: duration || DEFAULT_DURATION,
    }),
  error: (message: string, duration?: number) =>
    showToastComponent({
      type: ToastType.ERROR,
      message: message || DefaultMessage.ERROR,
      duration: duration || DEFAULT_DURATION,
    }),
  warning: (message: string, duration?: number) =>
    showToastComponent({
      type: ToastType.WARNING,
      message: message || DefaultMessage.WARNING,
      duration: duration || DEFAULT_DURATION,
    }),
  info: (message: string, duration?: number) =>
    showToastComponent({
      type: ToastType.INFO,
      message: message || DefaultMessage.INFO,
      duration: duration || DEFAULT_DURATION,
    }),
};

const showToastComponent = (toastDetail: ToastDetail) => {
  const { duration } = toastDetail;

  const toastContainer = document.createElement("div");

  // Render the ToastNotification component inside the container element
  ReactDOM.render(<ToastNotification {...toastDetail} />, toastContainer);

  // Append the container to the DOM
  document.body.appendChild(toastContainer);


  // Optionally, set a timeout to remove the toast notification after a certain time
  duration &&
    setTimeout(() => {
      document.body.removeChild(toastContainer);
    }, duration);
};

export default showToast;

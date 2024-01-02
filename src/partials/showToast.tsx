import React from "react";
import { createRoot } from "react-dom/client";
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

  const root = createRoot(toastContainer);

  // Render the ToastNotification component inside the container element
  root.render(<ToastNotification {...toastDetail} />);

  // Find and remove any existing toasts
  const existingToasts = document.querySelectorAll("[data-toast-container]");
  existingToasts.forEach((existingToast) => {
    if (document.body.contains(existingToast)) {
      document.body.removeChild(existingToast);
    }
  });

  // Append the new toast container to the DOM
  document.body.appendChild(toastContainer);
  toastContainer.setAttribute("data-toast-container", "true");

  // set a timeout to remove the toast notification after a certain time
  duration &&
    setTimeout(() => {
      // Check if the toastContainer is still a child of document.body
      if (document.body.contains(toastContainer)) {
        document.body.removeChild(toastContainer);
      }
    }, duration);
};

export default showToast;

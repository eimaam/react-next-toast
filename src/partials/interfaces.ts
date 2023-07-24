export interface ToastDetail {
  type: "success" | "error" | "info" | "warning";
  message: string;
  backgroundColor?: string;
  textColor?: string;
  position?:
    | "right"
    | "top-right"
    | "bottom-right"
    | "left"
    | "top-left"
    | "bottom-left";
  duration?: number;
}

export enum TOAST_TYPE {
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
}

export enum DEFAULT_MESSAGE {
  success = "Success",
  error = "Error",
  warning = "Warning",
  info = "Info",
}

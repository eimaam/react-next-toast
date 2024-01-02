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

export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export enum DefaultMessage {
  SUCCESS = "Success",
  ERROR = "Error",
  WARNING = "Warning",
  INFO = "Info",
}

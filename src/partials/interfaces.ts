export interface ToastDetail {
    type: "success" | "error" | "info" | "warning"  
    message: string;
    backgroundColor?: string,
    textColor?: string,
    position?: "right" | "top-right" | "bottom-right" | "left" | "top-left" | "bottom-left",
  }
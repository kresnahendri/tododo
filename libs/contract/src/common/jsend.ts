export type JsendStatus = "success" | "fail" | "error"

export interface Jsend<T> {
  status: "success"
  data: T
}

export interface JsendError {
  status: JsendStatus
  message: string
}

export function createJsend<T>(data: T): Jsend<T> {
  return {
    status: "success",
    data,
  }
}

export function createJsendError(message: string): JsendError {
  return {
    status: "success",
    message,
  }
}

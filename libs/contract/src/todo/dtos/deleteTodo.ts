import { Jsend } from "../../common/jsend"

export interface DeleteTodoRequest {
  id: string
}

export type DeleteTodoResponse = Jsend<null>

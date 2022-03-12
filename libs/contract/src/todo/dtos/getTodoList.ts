import { Jsend } from "../../common/jsend"
import { Todo } from "../models/todo"

export type GetTodoListResponse = Jsend<{ todos: Todo[] }>

import { Jsend } from "../../common/jsend"
import { Todo } from "../models/todo"

export type GetTodoResponse = Jsend<{ todo: Todo }>

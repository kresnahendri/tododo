import { Todo } from "../models/todo"
import { Jsend } from "../../common/jsend"

export type CreateTodoRequest = Pick<Todo, "content">

export type CreateTodoResponse = Jsend<{ todo: Todo }>

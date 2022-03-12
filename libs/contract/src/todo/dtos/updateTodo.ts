import { Jsend } from "../../common/jsend"
import { Todo } from "../models/todo"

export type UpdateTodoRequest = Partial<Omit<Todo, "_id">>

export type UpdateTodoResponse = Jsend<{ todo: Todo }>

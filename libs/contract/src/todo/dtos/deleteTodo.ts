import { Jsend } from "../../common/jsend"
import { Todo } from "../models/todo"

export type DeleteTodoResponse = Jsend<Pick<Todo, "_id">>

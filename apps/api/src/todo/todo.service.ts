import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { CreateTodoRequest, UpdateTodoRequest, Todo } from "@tododo/contract"
import { Model } from "mongoose"
import { from, Observable, map } from "rxjs"
import { TodoDocument, TodoClass } from "./todo.entity"

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TodoClass.name) private todoModel: Model<TodoDocument>,
  ) {}

  private mapTodoDocToTodo(todoDoc: TodoDocument): Todo {
    return {
      _id: todoDoc._id,
      content: todoDoc.content,
      completed: todoDoc.completed,
    }
  }

  getList(): Observable<Todo[]> {
    return from(this.todoModel.find()).pipe(
      map((todos) => {
        if (Array.isArray(todos)) {
          return todos.map((todoDoc) => {
            return this.mapTodoDocToTodo(todoDoc)
          })
        }
        return [this.mapTodoDocToTodo(todos)]
      }),
    )
  }

  get(_id: string): Observable<Todo> {
    return from(this.todoModel.findOne({ _id })).pipe(
      map((todoDoc) => {
        return this.mapTodoDocToTodo(todoDoc)
      }),
    )
  }

  create(todo: CreateTodoRequest): Observable<Todo> {
    return from(new this.todoModel(todo).save()).pipe(
      map((todoDoc) => this.mapTodoDocToTodo(todoDoc)),
    )
  }

  update(_id: string, todo: UpdateTodoRequest): Observable<Todo> {
    return from(this.todoModel.findByIdAndUpdate(_id, todo)).pipe(
      map((todoDoc) => this.mapTodoDocToTodo(todoDoc)),
    )
  }

  delete(_id: string): Observable<unknown> {
    return from(this.todoModel.deleteOne({ id: _id }))
  }
}

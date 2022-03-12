import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { CreateTodoRequest, UpdateTodoRequest } from "@tododo/contract"
import { Model } from "mongoose"
import { from } from "rxjs"
import { TodoDocument, TodoClass } from "./todo.entity"

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TodoClass.name) private todoModel: Model<TodoDocument>,
  ) {}

  getList() {
    return from(this.todoModel.find())
  }

  get(_id: string) {
    return from(this.todoModel.find({ _id }))
  }

  create(todo: CreateTodoRequest) {
    return from(new this.todoModel(todo).save())
  }

  update(_id: string, todo: UpdateTodoRequest) {
    return from(this.todoModel.findByIdAndUpdate(_id, todo))
  }

  delete(_id: string) {
    return from(this.todoModel.deleteOne({ id: _id }))
  }
}

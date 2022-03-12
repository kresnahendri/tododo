import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { createJsend, CreateTodoRequest } from "@tododo/contract"
import { from, map } from "rxjs"
import { TodoService } from "./todo.service"

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get("/")
  getTodoList() {
    return from(this.todoService.getList()).pipe(
      map((todos) => createJsend({ todos })),
    )
  }

  @Get("/:id")
  getTodo(@Param("id") id: string) {
    return from(this.todoService.get(id)).pipe(
      map((todo) => createJsend({ todo })),
    )
  }

  @Post("/")
  createTodo(@Body() body: CreateTodoRequest) {
    return from(this.todoService.create(body)).pipe(
      map((todo) => createJsend({ todo })),
    )
  }

  @Put("/:id")
  updateTodo(@Param("id") id: string, @Body() body: CreateTodoRequest) {
    return from(this.todoService.update(id, body)).pipe(
      map((todo) => createJsend({ todo })),
    )
  }

  @Delete("/:id")
  deleteTodo(@Param("id") id: string) {
    return from(this.todoService.delete(id)).pipe(
      map((todo) => createJsend({ todo })),
    )
  }
}

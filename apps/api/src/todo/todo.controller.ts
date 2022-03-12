import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import {
  createJsend,
  CreateTodoRequest,
  CreateTodoResponse,
  DeleteTodoResponse,
  GetTodoListResponse,
  GetTodoResponse,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from "@tododo/contract"
import { from, map, Observable } from "rxjs"
import { TodoService } from "./todo.service"

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get("/")
  getTodoList(): Observable<GetTodoListResponse> {
    return from(this.todoService.getList()).pipe(
      map((todos) => createJsend({ todos })),
    )
  }

  @Get("/:id")
  getTodo(@Param("id") id: string): Observable<GetTodoResponse> {
    return from(this.todoService.get(id)).pipe(
      map((todo) => createJsend({ todo })),
    )
  }

  @Post("/")
  createTodo(@Body() body: CreateTodoRequest): Observable<CreateTodoResponse> {
    return from(this.todoService.create(body)).pipe(
      map((todo) => createJsend({ todo })),
    )
  }

  @Put("/:id")
  updateTodo(
    @Param("id") id: string,
    @Body() body: UpdateTodoRequest,
  ): Observable<UpdateTodoResponse> {
    return from(this.todoService.update(id, body)).pipe(
      map((todo) => createJsend({ todo })),
    )
  }

  @Delete("/:id")
  deleteTodo(@Param("id") id: string): Observable<DeleteTodoResponse> {
    return from(this.todoService.delete(id)).pipe(
      map(() => createJsend({ _id: id })),
    )
  }
}

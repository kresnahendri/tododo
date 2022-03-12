import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { TodoController } from "./todo.controller"
import { TodoClass, TodoSchema } from "./todo.entity"
import { TodoService } from "./todo.service"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TodoClass.name, schema: TodoSchema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}

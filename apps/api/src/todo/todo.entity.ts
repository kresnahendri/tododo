import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Todo } from "@tododo/contract"
import { Document } from "mongoose"

export type TodoDocument = Todo & Document

@Schema({ versionKey: false, timestamps: true })
export class TodoClass implements Omit<Todo, "_id"> {
  @Prop()
  content: string

  @Prop()
  completed: boolean
}

export const TodoSchema = SchemaFactory.createForClass(TodoClass)

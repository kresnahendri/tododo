import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { TodoModule } from "../todo/todo.module"

@Module({
  imports: [MongooseModule.forRoot(process.env.API_MONGO_URL), TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

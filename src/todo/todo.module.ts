import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoController } from "./controllers/todo.service";
import { Todo } from "./entities/todo.entity";
import { TodoService } from "./services/todo.service";


@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodoController],
    providers: [TodoService],
    exports: [TypeOrmModule]
})
export class todoModule { }
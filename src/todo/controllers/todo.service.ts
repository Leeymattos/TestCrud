import { Controller } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { TodoService } from "../services/todo.service";

@Controller()
export class TodoController {

    constructor(
        private readonly todoService: TodoService
    ) { }

    callCreate(todo: Todo): Promise<Todo> {
        return this.todoService.create(todo);
    }

    callFindAll() {
        return this.todoService.findAll();
    }
}
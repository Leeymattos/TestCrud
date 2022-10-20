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

    callFindAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    callUpdate(todo: Todo) {
        return this.todoService.update(todo);
    }
}
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "../entities/todo.entity";


@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ) { }

    async create(todo: Todo): Promise<Todo> {
        return await this.todoRepository.save(todo);
    }

    async findAll(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async findById(id: string): Promise<Todo> {
        const todoFound = await this.todoRepository.findOneBy({ id });

        if (!todoFound) {
            throw new HttpException('Todo não encontrada', HttpStatus.NOT_FOUND);
        }

        return todoFound;
    }
}
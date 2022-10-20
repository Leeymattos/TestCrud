import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'tb_todos' })
export class Todo {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @IsNotEmpty()
    @Column({ length: 200, nullable: false })
    taks: string

    @IsNotEmpty()
    @Column({ default: false })
    isComplete: boolean
}
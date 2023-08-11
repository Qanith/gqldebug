/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoInput } from './todo.input';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  createTodo(todoInput: TodoInput): Todo {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title: todoInput.title,
      completed: todoInput.completed,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}

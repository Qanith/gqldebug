import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { TodoInput } from './todo.input';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Resolver()
export class TodoResolver {
  private todos = [];
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [String])
  async getAllTodos() {
    return this.todos.map((todo) => todo.title);
  }

  // @Mutation(() => String)
  // async createTodo(@Args('title') title: string): Promise<string> {
  //   const newTodo = { title, completed: false };
  //   this.todos.push(newTodo);
  //   return 'Todo created successfully';
  // }

  @Mutation(() => String)
  async createTodo(@Args('todoInput') todoInput: TodoInput): Promise<Todo> {
    return this.todoService.createTodo(todoInput);
  }
}

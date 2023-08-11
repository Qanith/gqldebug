// src/todo/todo.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TodoResolver } from './todo.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodoService } from './todo.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [TodoResolver, TodoService],
})
export class TodoModule {}

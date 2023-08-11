/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field()
  title: string;

  @Field()
  completed: boolean;
}

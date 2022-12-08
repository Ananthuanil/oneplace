/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaskWhereInput } from "./TaskWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TaskListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TaskWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereInput)
  @IsOptional()
  @Field(() => TaskWhereInput, {
    nullable: true,
  })
  every?: TaskWhereInput;

  @ApiProperty({
    required: false,
    type: () => TaskWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereInput)
  @IsOptional()
  @Field(() => TaskWhereInput, {
    nullable: true,
  })
  some?: TaskWhereInput;

  @ApiProperty({
    required: false,
    type: () => TaskWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereInput)
  @IsOptional()
  @Field(() => TaskWhereInput, {
    nullable: true,
  })
  none?: TaskWhereInput;
}
export { TaskListRelationFilter };

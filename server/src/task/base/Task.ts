/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Attendance } from "../../attendance/base/Attendance";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Project } from "../../project/base/Project";
import { EnumTaskStatus } from "./EnumTaskStatus";
@ObjectType()
class Task {
  @ApiProperty({
    required: false,
    type: () => Attendance,
  })
  @ValidateNested()
  @Type(() => Attendance)
  @IsOptional()
  attendance?: Attendance | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Project,
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  project?: Project | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  specification!: string | null;

  @ApiProperty({
    required: true,
    enum: EnumTaskStatus,
  })
  @IsEnum(EnumTaskStatus)
  @Field(() => EnumTaskStatus, {
    nullable: true,
  })
  status?: "completed" | "inProgress" | "blocker";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ticketId!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ticketLink!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ticketName!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Task };

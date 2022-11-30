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
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { EnumAttendanceOffice } from "./EnumAttendanceOffice";
import { Task } from "../../task/base/Task";
import { EnumAttendanceWorkMode } from "./EnumAttendanceWorkMode";
@ObjectType()
class Attendance {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  employee?: User | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  loginTime!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logoutTime!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAttendanceOffice,
  })
  @IsEnum(EnumAttendanceOffice)
  @IsOptional()
  @Field(() => EnumAttendanceOffice, {
    nullable: true,
  })
  office?: "mgRoad" | "infopark" | null;

  @ApiProperty({
    required: false,
    type: () => [Task],
  })
  @ValidateNested()
  @Type(() => Task)
  @IsOptional()
  tasks?: Array<Task>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumAttendanceWorkMode,
  })
  @IsEnum(EnumAttendanceWorkMode)
  @IsOptional()
  @Field(() => EnumAttendanceWorkMode, {
    nullable: true,
  })
  workMode?: "WFO" | "WFH" | null;
}
export { Attendance };

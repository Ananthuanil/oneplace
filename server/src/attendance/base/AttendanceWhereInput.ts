/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumAttendanceOffice } from "./EnumAttendanceOffice";
import { TaskListRelationFilter } from "../../task/base/TaskListRelationFilter";
import { EnumAttendanceWorkMode } from "./EnumAttendanceWorkMode";
@InputType()
class AttendanceWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  loginTime?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  logoutTime?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumAttendanceOffice,
  })
  @IsEnum(EnumAttendanceOffice)
  @IsOptional()
  @Field(() => EnumAttendanceOffice, {
    nullable: true,
  })
  office?: "mgRoad" | "infopark";

  @ApiProperty({
    required: false,
    type: () => TaskListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TaskListRelationFilter)
  @IsOptional()
  @Field(() => TaskListRelationFilter, {
    nullable: true,
  })
  tasks?: TaskListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumAttendanceWorkMode,
  })
  @IsEnum(EnumAttendanceWorkMode)
  @IsOptional()
  @Field(() => EnumAttendanceWorkMode, {
    nullable: true,
  })
  workMode?: "WFO" | "WFH";
}
export { AttendanceWhereInput };

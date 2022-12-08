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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumAttendanceOffice } from "./EnumAttendanceOffice";
import { TaskCreateNestedManyWithoutAttendancesInput } from "./TaskCreateNestedManyWithoutAttendancesInput";
import { EnumAttendanceWorkMode } from "./EnumAttendanceWorkMode";
@InputType()
class AttendanceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  attendanceStatus?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  employee?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  loginTime?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logoutTime?: string | null;

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
    type: () => TaskCreateNestedManyWithoutAttendancesInput,
  })
  @ValidateNested()
  @Type(() => TaskCreateNestedManyWithoutAttendancesInput)
  @IsOptional()
  @Field(() => TaskCreateNestedManyWithoutAttendancesInput, {
    nullable: true,
  })
  tasks?: TaskCreateNestedManyWithoutAttendancesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  temp?: string | null;

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
export { AttendanceCreateInput };

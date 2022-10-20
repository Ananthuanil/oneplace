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
import { IsString, IsDate, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { EnumEmployeeFeedbackNature } from "./EnumEmployeeFeedbackNature";
@ObjectType()
class EmployeeFeedback {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  area!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  employee?: User;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumEmployeeFeedbackNature,
  })
  @IsEnum(EnumEmployeeFeedbackNature)
  @Field(() => EnumEmployeeFeedbackNature, {
    nullable: true,
  })
  nature?: "Positive" | "Negative" | "Neutral";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  remark!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { EmployeeFeedback };

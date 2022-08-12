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
  IsString,
  ValidateNested,
  IsOptional,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { InterviewFeedback } from "../../interviewFeedback/base/InterviewFeedback";
import { Skill } from "../../skill/base/Skill";
import { User } from "../../user/base/User";
@ObjectType()
class SkillLevel {
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
    type: () => InterviewFeedback,
  })
  @ValidateNested()
  @Type(() => InterviewFeedback)
  @IsOptional()
  interviewFeedback?: InterviewFeedback | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  level!: number | null;

  @ApiProperty({
    required: false,
    type: () => Skill,
  })
  @ValidateNested()
  @Type(() => Skill)
  @IsOptional()
  skill?: Skill | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  users?: Array<User>;
}
export { SkillLevel };

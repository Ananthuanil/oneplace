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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsBoolean,
  IsDate,
} from "class-validator";
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
import { Type } from "class-transformer";
import { InterviewFeedbackUpdateManyWithoutInterviewsInput } from "./InterviewFeedbackUpdateManyWithoutInterviewsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../../opportunity/base/OpportunityWhereUniqueInput";
@InputType()
class InterviewUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  calendarScheduleId?: string | null;

  @ApiProperty({
    required: false,
    type: () => CandidateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateWhereUniqueInput)
  @IsOptional()
  @Field(() => CandidateWhereUniqueInput, {
    nullable: true,
  })
  candidate?: CandidateWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  closed?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentStatus?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => InterviewFeedbackUpdateManyWithoutInterviewsInput,
  })
  @ValidateNested()
  @Type(() => InterviewFeedbackUpdateManyWithoutInterviewsInput)
  @IsOptional()
  @Field(() => InterviewFeedbackUpdateManyWithoutInterviewsInput, {
    nullable: true,
  })
  feedback?: InterviewFeedbackUpdateManyWithoutInterviewsInput;

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
  interviewer?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  level?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mode?: string | null;

  @ApiProperty({
    required: false,
    type: () => OpportunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpportunityWhereUniqueInput)
  @IsOptional()
  @Field(() => OpportunityWhereUniqueInput, {
    nullable: true,
  })
  opportunity?: OpportunityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  subject?: string | null;
}
export { InterviewUpdateInput };

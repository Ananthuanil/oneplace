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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { CommunicationFeedbackWhereUniqueInput } from "../../communicationFeedback/base/CommunicationFeedbackWhereUniqueInput";
import { Type } from "class-transformer";
import { InterviewWhereUniqueInput } from "../../interview/base/InterviewWhereUniqueInput";
import { SkillLevelUpdateManyWithoutInterviewFeedbacksInput } from "./SkillLevelUpdateManyWithoutInterviewFeedbacksInput";
import { SkillSetUpdateManyWithoutInterviewFeedbacksInput } from "./SkillSetUpdateManyWithoutInterviewFeedbacksInput";
import { EnumInterviewFeedbackStatus } from "./EnumInterviewFeedbackStatus";
@InputType()
class InterviewFeedbackUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  attitudeFeedback?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommunicationFeedbackWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunicationFeedbackWhereUniqueInput)
  @IsOptional()
  @Field(() => CommunicationFeedbackWhereUniqueInput, {
    nullable: true,
  })
  communication?: CommunicationFeedbackWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  feedback?: string;

  @ApiProperty({
    required: false,
    type: () => InterviewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InterviewWhereUniqueInput)
  @IsOptional()
  @Field(() => InterviewWhereUniqueInput, {
    nullable: true,
  })
  interview?: InterviewWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logicFeedback?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  relevantTechFeedback?: string | null;

  @ApiProperty({
    required: false,
    type: () => SkillLevelUpdateManyWithoutInterviewFeedbacksInput,
  })
  @ValidateNested()
  @Type(() => SkillLevelUpdateManyWithoutInterviewFeedbacksInput)
  @IsOptional()
  @Field(() => SkillLevelUpdateManyWithoutInterviewFeedbacksInput, {
    nullable: true,
  })
  skillMatrices?: SkillLevelUpdateManyWithoutInterviewFeedbacksInput;

  @ApiProperty({
    required: false,
    type: () => SkillSetUpdateManyWithoutInterviewFeedbacksInput,
  })
  @ValidateNested()
  @Type(() => SkillSetUpdateManyWithoutInterviewFeedbacksInput)
  @IsOptional()
  @Field(() => SkillSetUpdateManyWithoutInterviewFeedbacksInput, {
    nullable: true,
  })
  skillSets?: SkillSetUpdateManyWithoutInterviewFeedbacksInput;

  @ApiProperty({
    required: false,
    enum: EnumInterviewFeedbackStatus,
  })
  @IsEnum(EnumInterviewFeedbackStatus)
  @IsOptional()
  @Field(() => EnumInterviewFeedbackStatus, {
    nullable: true,
  })
  status?: "Passed" | "NotPassed" | "Hold" | null;
}
export { InterviewFeedbackUpdateInput };

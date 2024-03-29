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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { CommunicationFeedbackWhereUniqueInput } from "../../communicationFeedback/base/CommunicationFeedbackWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InterviewWhereUniqueInput } from "../../interview/base/InterviewWhereUniqueInput";
import { SkillLevelListRelationFilter } from "../../skillLevel/base/SkillLevelListRelationFilter";
import { SkillSetListRelationFilter } from "../../skillSet/base/SkillSetListRelationFilter";
import { EnumInterviewFeedbackStatus } from "./EnumInterviewFeedbackStatus";
@InputType()
class InterviewFeedbackWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  attitudeFeedback?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  comments?: StringNullableFilter;

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
  communication?: CommunicationFeedbackWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  feedback?: StringFilter;

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
    type: () => InterviewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InterviewWhereUniqueInput)
  @IsOptional()
  @Field(() => InterviewWhereUniqueInput, {
    nullable: true,
  })
  interview?: InterviewWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  logicFeedback?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  relevantTechFeedback?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SkillLevelListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SkillLevelListRelationFilter)
  @IsOptional()
  @Field(() => SkillLevelListRelationFilter, {
    nullable: true,
  })
  skillMatrices?: SkillLevelListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SkillSetListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SkillSetListRelationFilter)
  @IsOptional()
  @Field(() => SkillSetListRelationFilter, {
    nullable: true,
  })
  skillSets?: SkillSetListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumInterviewFeedbackStatus,
  })
  @IsEnum(EnumInterviewFeedbackStatus)
  @IsOptional()
  @Field(() => EnumInterviewFeedbackStatus, {
    nullable: true,
  })
  status?: "Passed" | "NotPassed" | "Hold";
}
export { InterviewFeedbackWhereInput };

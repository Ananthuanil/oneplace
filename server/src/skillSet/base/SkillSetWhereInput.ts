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
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewFeedbackWhereUniqueInput } from "../../interviewFeedback/base/InterviewFeedbackWhereUniqueInput";
import { SkillWhereUniqueInput } from "../../skill/base/SkillWhereUniqueInput";
@InputType()
class SkillSetWhereInput {
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
  candidate?: CandidateWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  employees?: UserListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  expertiseLevel?: IntNullableFilter;

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
    type: () => InterviewFeedbackWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InterviewFeedbackWhereUniqueInput)
  @IsOptional()
  @Field(() => InterviewFeedbackWhereUniqueInput, {
    nullable: true,
  })
  interviewFeedback?: InterviewFeedbackWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SkillWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkillWhereUniqueInput)
  @IsOptional()
  @Field(() => SkillWhereUniqueInput, {
    nullable: true,
  })
  skill?: SkillWhereUniqueInput;
}
export { SkillSetWhereInput };

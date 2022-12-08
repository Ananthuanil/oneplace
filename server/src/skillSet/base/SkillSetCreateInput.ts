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
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutSkillSetsInput } from "./UserCreateNestedManyWithoutSkillSetsInput";
import { InterviewFeedbackWhereUniqueInput } from "../../interviewFeedback/base/InterviewFeedbackWhereUniqueInput";
import { SkillWhereUniqueInput } from "../../skill/base/SkillWhereUniqueInput";
@InputType()
class SkillSetCreateInput {
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
    type: () => UserCreateNestedManyWithoutSkillSetsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutSkillSetsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutSkillSetsInput, {
    nullable: true,
  })
  employees?: UserCreateNestedManyWithoutSkillSetsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  expertiseLevel?: number | null;

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
  interviewFeedback?: InterviewFeedbackWhereUniqueInput | null;

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
  skill?: SkillWhereUniqueInput | null;
}
export { SkillSetCreateInput };

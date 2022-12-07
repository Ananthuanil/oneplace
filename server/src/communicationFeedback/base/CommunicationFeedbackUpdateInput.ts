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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
import { Type } from "class-transformer";
import { InterviewFeedbackWhereUniqueInput } from "../../interviewFeedback/base/InterviewFeedbackWhereUniqueInput";
@InputType()
class CommunicationFeedbackUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  abilityToArticulate?: string | null;

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
  candidates?: CandidateWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  confidenceLevel?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  englishSpeakingSkills?: string | null;

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
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput | null;
}
export { CommunicationFeedbackUpdateInput };

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
import { InterviewFeedbackWhereInput } from "./InterviewFeedbackWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InterviewFeedbackListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InterviewFeedbackWhereInput,
  })
  @ValidateNested()
  @Type(() => InterviewFeedbackWhereInput)
  @IsOptional()
  @Field(() => InterviewFeedbackWhereInput, {
    nullable: true,
  })
  every?: InterviewFeedbackWhereInput;

  @ApiProperty({
    required: false,
    type: () => InterviewFeedbackWhereInput,
  })
  @ValidateNested()
  @Type(() => InterviewFeedbackWhereInput)
  @IsOptional()
  @Field(() => InterviewFeedbackWhereInput, {
    nullable: true,
  })
  some?: InterviewFeedbackWhereInput;

  @ApiProperty({
    required: false,
    type: () => InterviewFeedbackWhereInput,
  })
  @ValidateNested()
  @Type(() => InterviewFeedbackWhereInput)
  @IsOptional()
  @Field(() => InterviewFeedbackWhereInput, {
    nullable: true,
  })
  none?: InterviewFeedbackWhereInput;
}
export { InterviewFeedbackListRelationFilter };

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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsNumber,
  IsBoolean,
  IsDate,
} from "class-validator";
import { OpportunityUpdateManyWithoutCandidatesInput } from "./OpportunityUpdateManyWithoutCandidatesInput";
import { Type } from "class-transformer";
import { EnumCandidateCategory } from "./EnumCandidateCategory";
import { CommunicationFeedbackWhereUniqueInput } from "../../communicationFeedback/base/CommunicationFeedbackWhereUniqueInput";
import { RecruitmentPartnerWhereUniqueInput } from "../../recruitmentPartner/base/RecruitmentPartnerWhereUniqueInput";
import { InterviewUpdateManyWithoutCandidatesInput } from "./InterviewUpdateManyWithoutCandidatesInput";
import { OpportunityWhereUniqueInput } from "../../opportunity/base/OpportunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SkillUpdateManyWithoutCandidatesInput } from "./SkillUpdateManyWithoutCandidatesInput";
import { SkillSetUpdateManyWithoutCandidatesInput } from "./SkillSetUpdateManyWithoutCandidatesInput";
import { EnumCandidateSource } from "./EnumCandidateSource";
@InputType()
class CandidateUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  additionalComments?: string | null;

  @ApiProperty({
    required: false,
    type: () => OpportunityUpdateManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => OpportunityUpdateManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => OpportunityUpdateManyWithoutCandidatesInput, {
    nullable: true,
  })
  candidateOpportunity?: OpportunityUpdateManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    enum: EnumCandidateCategory,
  })
  @IsEnum(EnumCandidateCategory)
  @IsOptional()
  @Field(() => EnumCandidateCategory, {
    nullable: true,
  })
  category?: "P1" | "P2" | "P3";

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
  communicationFeedback?: CommunicationFeedbackWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  competitorCtc?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  currentCtc?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentDesignation?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentFirm?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentStatus?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  expectedCtc?: number | null;

  @ApiProperty({
    required: false,
    type: () => RecruitmentPartnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentPartnerWhereUniqueInput)
  @IsOptional()
  @Field(() => RecruitmentPartnerWhereUniqueInput, {
    nullable: true,
  })
  externalRecruitmentPartner?: RecruitmentPartnerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => InterviewUpdateManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => InterviewUpdateManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => InterviewUpdateManyWithoutCandidatesInput, {
    nullable: true,
  })
  interviews?: InterviewUpdateManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isOnNoticePeriod?: boolean;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastWorkingDay?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  noticePeriodTime?: number | null;

  @ApiProperty({
    required: false,
    type: () => OpportunityUpdateManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => OpportunityUpdateManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => OpportunityUpdateManyWithoutCandidatesInput, {
    nullable: true,
  })
  opportunities?: OpportunityUpdateManyWithoutCandidatesInput;

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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  referalEmployee?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resume?: string | null;

  @ApiProperty({
    required: false,
    type: () => SkillUpdateManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => SkillUpdateManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => SkillUpdateManyWithoutCandidatesInput, {
    nullable: true,
  })
  skills?: SkillUpdateManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    type: () => SkillSetUpdateManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => SkillSetUpdateManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => SkillSetUpdateManyWithoutCandidatesInput, {
    nullable: true,
  })
  skillSets?: SkillSetUpdateManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    enum: EnumCandidateSource,
  })
  @IsEnum(EnumCandidateSource)
  @IsOptional()
  @Field(() => EnumCandidateSource, {
    nullable: true,
  })
  source?: "Internal" | "Referral" | "ExternalRecruitmentPartner";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalExperience?: number;
}
export { CandidateUpdateInput };

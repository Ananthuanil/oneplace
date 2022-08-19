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
  IsEnum,
  IsNumber,
  ValidateNested,
  IsBoolean,
  IsDate,
  IsInt,
} from "class-validator";

import { EnumCandidateCategory } from "./EnumCandidateCategory";
import { InterviewCreateNestedManyWithoutCandidatesInput } from "./InterviewCreateNestedManyWithoutCandidatesInput";
import { Type } from "class-transformer";
import { OpportunityWhereUniqueInput } from "../../opportunity/base/OpportunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SkillCreateNestedManyWithoutCandidatesInput } from "./SkillCreateNestedManyWithoutCandidatesInput";
import { SkillSetCreateNestedManyWithoutCandidatesInput } from "./SkillSetCreateNestedManyWithoutCandidatesInput";
import { EnumCandidateSource } from "./EnumCandidateSource";
@InputType()
class CandidateCreateInput {
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
    required: true,
    enum: EnumCandidateCategory,
  })
  @IsEnum(EnumCandidateCategory)
  @Field(() => EnumCandidateCategory)
  category!: "P1" | "P2" | "P3";

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currentStatus!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  externalRecruitmentPartner?: string | null;

  @ApiProperty({
    required: false,
    type: () => InterviewCreateNestedManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => InterviewCreateNestedManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => InterviewCreateNestedManyWithoutCandidatesInput, {
    nullable: true,
  })
  interviews?: InterviewCreateNestedManyWithoutCandidatesInput;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isOnNoticePeriod!: boolean;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

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
    type: () => SkillCreateNestedManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => SkillCreateNestedManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => SkillCreateNestedManyWithoutCandidatesInput, {
    nullable: true,
  })
  skills?: SkillCreateNestedManyWithoutCandidatesInput;

  @ApiProperty({
    required: false,
    type: () => SkillSetCreateNestedManyWithoutCandidatesInput,
  })
  @ValidateNested()
  @Type(() => SkillSetCreateNestedManyWithoutCandidatesInput)
  @IsOptional()
  @Field(() => SkillSetCreateNestedManyWithoutCandidatesInput, {
    nullable: true,
  })
  skillSets?: SkillSetCreateNestedManyWithoutCandidatesInput;

  @ApiProperty({
    required: true,
    enum: EnumCandidateSource,
  })
  @IsEnum(EnumCandidateSource)
  @Field(() => EnumCandidateSource)
  source!: "Internal" | "Referral" | "ExternalRecruitmentPartner";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  totalExperience!: number;
}
export { CandidateCreateInput };

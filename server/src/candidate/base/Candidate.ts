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
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsDate,
  ValidateNested,
  IsBoolean,
  IsInt,
} from "class-validator";

import { EnumCandidateCategory } from "./EnumCandidateCategory";
import { Type } from "class-transformer";
import { EnumCandidateCurrentStatus } from "./EnumCandidateCurrentStatus";
import { Interview } from "../../interview/base/Interview";
import { User } from "../../user/base/User";
import { Skill } from "../../skill/base/Skill";
import { SkillSet } from "../../skillSet/base/SkillSet";
import { EnumCandidateSource } from "./EnumCandidateSource";
@ObjectType()
class Candidate {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  additionalComments!: string | null;

  @ApiProperty({
    required: true,
    enum: EnumCandidateCategory,
  })
  @IsEnum(EnumCandidateCategory)
  @Field(() => EnumCandidateCategory, {
    nullable: true,
  })
  category?: "P1" | "P2" | "P3";

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  competitorCtc!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  currentCtc!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentDesignation!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentFirm!: string | null;

  @ApiProperty({
    required: true,
    enum: EnumCandidateCurrentStatus,
  })
  @IsEnum(EnumCandidateCurrentStatus)
  @Field(() => EnumCandidateCurrentStatus, {
    nullable: true,
  })
  currentStatus?:
    | "Parked"
    | "AwaitingInterview"
    | "InterviewScheduled"
    | "InterviewSelected"
    | "OfferReleased"
    | "Joined"
    | "OfferRejected"
    | "InterviewRejected"
    | "OnHold";

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
  expectedCtc!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  externalRecruitmentPartner!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Interview],
  })
  @ValidateNested()
  @Type(() => Interview)
  @IsOptional()
  interviews?: Array<Interview>;

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
  lastWorkingDay!: Date | null;

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
  noticePeriodTime!: number | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  referalEmployee?: User | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resume!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Skill],
  })
  @ValidateNested()
  @Type(() => Skill)
  @IsOptional()
  skills?: Array<Skill>;

  @ApiProperty({
    required: false,
    type: () => [SkillSet],
  })
  @ValidateNested()
  @Type(() => SkillSet)
  @IsOptional()
  skillSets?: Array<SkillSet>;

  @ApiProperty({
    required: true,
    enum: EnumCandidateSource,
  })
  @IsEnum(EnumCandidateSource)
  @Field(() => EnumCandidateSource, {
    nullable: true,
  })
  source?: "Internal" | "Referral" | "ExternalRecruitmentPartner";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  totalExperience!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Candidate };

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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumCandidateCategory } from "./EnumCandidateCategory";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EnumCandidateCurrentStatus } from "./EnumCandidateCurrentStatus";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../../interview/base/InterviewListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SkillListRelationFilter } from "../../skill/base/SkillListRelationFilter";
import { SkillSetListRelationFilter } from "../../skillSet/base/SkillSetListRelationFilter";
import { EnumCandidateSource } from "./EnumCandidateSource";
import { IntFilter } from "../../util/IntFilter";
@InputType()
class CandidateWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  additionalComments?: StringNullableFilter;

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
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  competitorCtc?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  currentCtc?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  currentDesignation?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  currentFirm?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumCandidateCurrentStatus,
  })
  @IsEnum(EnumCandidateCurrentStatus)
  @IsOptional()
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
    | "OfferRejected";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  expectedCtc?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  externalRecruitmentPartner?: StringNullableFilter;

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
    type: () => InterviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InterviewListRelationFilter)
  @IsOptional()
  @Field(() => InterviewListRelationFilter, {
    nullable: true,
  })
  interviews?: InterviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isOnNoticePeriod?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  lastWorkingDay?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  noticePeriodTime?: FloatNullableFilter;

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
  referalEmployee?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  resume?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SkillListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SkillListRelationFilter)
  @IsOptional()
  @Field(() => SkillListRelationFilter, {
    nullable: true,
  })
  skills?: SkillListRelationFilter;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  totalExperience?: IntFilter;
}
export { CandidateWhereInput };

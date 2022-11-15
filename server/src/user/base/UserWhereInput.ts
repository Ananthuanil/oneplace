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
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { AwardListRelationFilter } from "../../award/base/AwardListRelationFilter";
import { CandidateListRelationFilter } from "../../candidate/base/CandidateListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientFeedbackListRelationFilter } from "../../clientFeedback/base/ClientFeedbackListRelationFilter";
import { CommunityListRelationFilter } from "../../community/base/CommunityListRelationFilter";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackListRelationFilter } from "../../communityActivityFeedback/base/CommunityActivityFeedbackListRelationFilter";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { EnumUserDesignation } from "./EnumUserDesignation";
import { EmployeeFeedbackListRelationFilter } from "../../employeeFeedback/base/EmployeeFeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumUserGender } from "./EnumUserGender";
import { InterviewListRelationFilter } from "../../interview/base/InterviewListRelationFilter";
import { OpportunityListRelationFilter } from "../../opportunity/base/OpportunityListRelationFilter";
import { ProjectListRelationFilter } from "../../project/base/ProjectListRelationFilter";
import { ProjectInvolvementListRelationFilter } from "../../projectInvolvement/base/ProjectInvolvementListRelationFilter";
import { SkillLevelWhereUniqueInput } from "../../skillLevel/base/SkillLevelWhereUniqueInput";
import { SkillSetListRelationFilter } from "../../skillSet/base/SkillSetListRelationFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";
@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  aadarNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AwardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AwardListRelationFilter)
  @IsOptional()
  @Field(() => AwardListRelationFilter, {
    nullable: true,
  })
  awards?: AwardListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  bloodGroup?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CandidateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CandidateListRelationFilter)
  @IsOptional()
  @Field(() => CandidateListRelationFilter, {
    nullable: true,
  })
  candidates?: CandidateListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  careerStartDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ClientFeedbackListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ClientFeedbackListRelationFilter)
  @IsOptional()
  @Field(() => ClientFeedbackListRelationFilter, {
    nullable: true,
  })
  clientFeedbacks?: ClientFeedbackListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommunityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommunityListRelationFilter)
  @IsOptional()
  @Field(() => CommunityListRelationFilter, {
    nullable: true,
  })
  communities?: CommunityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunityWhereUniqueInput)
  @IsOptional()
  @Field(() => CommunityWhereUniqueInput, {
    nullable: true,
  })
  community?: CommunityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CommunityActivityFeedbackListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommunityActivityFeedbackListRelationFilter)
  @IsOptional()
  @Field(() => CommunityActivityFeedbackListRelationFilter, {
    nullable: true,
  })
  communityActivityFeedbacks?: CommunityActivityFeedbackListRelationFilter;

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
  communityMentor?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  contactNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  courseOutDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dateOfJoining?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumUserDesignation,
  })
  @IsEnum(EnumUserDesignation)
  @IsOptional()
  @Field(() => EnumUserDesignation, {
    nullable: true,
  })
  designation?:
    | "Joe"
    | "Engineer"
    | "SeniorEngineer"
    | "Consultant"
    | "SeniorConsultant"
    | "PrincipalConsultant"
    | "Director"
    | "Cxo";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dob?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  emergencyContactNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EmployeeFeedbackListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeFeedbackListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeFeedbackListRelationFilter, {
    nullable: true,
  })
  employeeFeedbacks?: EmployeeFeedbackListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  firstName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  folderLink?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fwExperience?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumUserGender,
  })
  @IsEnum(EnumUserGender)
  @IsOptional()
  @Field(() => EnumUserGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Others";

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  image?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  imageLink?: StringNullableFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  lastName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  notifications?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OpportunityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OpportunityListRelationFilter)
  @IsOptional()
  @Field(() => OpportunityListRelationFilter, {
    nullable: true,
  })
  opportunities?: OpportunityListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  panNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  personalEmailId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  previousFirmOutDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectListRelationFilter)
  @IsOptional()
  @Field(() => ProjectListRelationFilter, {
    nullable: true,
  })
  project?: ProjectListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectInvolvementListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectInvolvementListRelationFilter)
  @IsOptional()
  @Field(() => ProjectInvolvementListRelationFilter, {
    nullable: true,
  })
  projectInvolved?: ProjectInvolvementListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  resumeLink?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EmployeeFeedbackListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeFeedbackListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeFeedbackListRelationFilter, {
    nullable: true,
  })
  reviewer?: EmployeeFeedbackListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  secondaryEmail?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SkillLevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkillLevelWhereUniqueInput)
  @IsOptional()
  @Field(() => SkillLevelWhereUniqueInput, {
    nullable: true,
  })
  skillLevel?: SkillLevelWhereUniqueInput;

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
    type: () => AwardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AwardListRelationFilter)
  @IsOptional()
  @Field(() => AwardListRelationFilter, {
    nullable: true,
  })
  toPerson?: AwardListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  totalExperience?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

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
  users?: UserListRelationFilter;
}
export { UserWhereInput };

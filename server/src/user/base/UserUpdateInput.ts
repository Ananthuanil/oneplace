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
  ValidateNested,
  IsDate,
  IsEnum,
  IsJSON,
} from "class-validator";
import { AwardUpdateManyWithoutUsersInput } from "./AwardUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { CandidateUpdateManyWithoutUsersInput } from "./CandidateUpdateManyWithoutUsersInput";
import { ClientFeedbackUpdateManyWithoutUsersInput } from "./ClientFeedbackUpdateManyWithoutUsersInput";
import { CommunityUpdateManyWithoutUsersInput } from "./CommunityUpdateManyWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackUpdateManyWithoutUsersInput } from "./CommunityActivityFeedbackUpdateManyWithoutUsersInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { EnumUserDesignation } from "./EnumUserDesignation";
import { EmployeeFeedbackUpdateManyWithoutUsersInput } from "./EmployeeFeedbackUpdateManyWithoutUsersInput";
import { EnumUserGender } from "./EnumUserGender";
import { InterviewUpdateManyWithoutUsersInput } from "./InterviewUpdateManyWithoutUsersInput";
import { OpportunityUpdateManyWithoutUsersInput } from "./OpportunityUpdateManyWithoutUsersInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { ProjectInvolvementUpdateManyWithoutUsersInput } from "./ProjectInvolvementUpdateManyWithoutUsersInput";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SkillLevelWhereUniqueInput } from "../../skillLevel/base/SkillLevelWhereUniqueInput";
import { SkillSetUpdateManyWithoutUsersInput } from "./SkillSetUpdateManyWithoutUsersInput";
import { UserUpdateManyWithoutUsersInput } from "./UserUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  aadarNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => AwardUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AwardUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AwardUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  awards?: AwardUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bloodGroup?: string | null;

  @ApiProperty({
    required: false,
    type: () => CandidateUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CandidateUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CandidateUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  candidates?: CandidateUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  careerStartDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ClientFeedbackUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ClientFeedbackUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ClientFeedbackUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  clientFeedbacks?: ClientFeedbackUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommunityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  communities?: CommunityUpdateManyWithoutUsersInput;

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
  community?: CommunityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CommunityActivityFeedbackUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityActivityFeedbackUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityActivityFeedbackUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  communityActivityFeedbacks?: CommunityActivityFeedbackUpdateManyWithoutUsersInput;

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
  communityMentor?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactNumber?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  courseOutDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfJoining?: Date | null;

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
    | "Cxo"
    | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dob?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  emergencyContactNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeFeedbackUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmployeeFeedbackUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmployeeFeedbackUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  employeeFeedbacks?: EmployeeFeedbackUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  folderLink?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fwExperience?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumUserGender,
  })
  @IsEnum(EnumUserGender)
  @IsOptional()
  @Field(() => EnumUserGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Others" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageLink?: string | null;

  @ApiProperty({
    required: false,
    type: () => InterviewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => InterviewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => InterviewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  interviews?: InterviewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notifications?: string | null;

  @ApiProperty({
    required: false,
    type: () => OpportunityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OpportunityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OpportunityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  opportunities?: OpportunityUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  panNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  personalEmailId?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  previousFirmOutDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  project?: ProjectUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ProjectInvolvementUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectInvolvementUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectInvolvementUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  projectInvolved?: ProjectInvolvementUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resumeLink?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeFeedbackUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmployeeFeedbackUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmployeeFeedbackUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  reviewer?: EmployeeFeedbackUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  secondaryEmail?: string | null;

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
  skillLevel?: SkillLevelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SkillSetUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SkillSetUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SkillSetUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  skillSets?: SkillSetUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AwardUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AwardUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AwardUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  toPerson?: AwardUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  totalExperience?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutUsersInput;
}
export { UserUpdateInput };

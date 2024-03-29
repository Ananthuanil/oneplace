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
  IsDate,
  IsEnum,
  IsJSON,
} from "class-validator";
import { AttendanceCreateNestedManyWithoutUsersInput } from "./AttendanceCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { AwardCreateNestedManyWithoutUsersInput } from "./AwardCreateNestedManyWithoutUsersInput";
import { CandidateCreateNestedManyWithoutUsersInput } from "./CandidateCreateNestedManyWithoutUsersInput";
import { ClientFeedbackCreateNestedManyWithoutUsersInput } from "./ClientFeedbackCreateNestedManyWithoutUsersInput";
import { CommunityCreateNestedManyWithoutUsersInput } from "./CommunityCreateNestedManyWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackCreateNestedManyWithoutUsersInput } from "./CommunityActivityFeedbackCreateNestedManyWithoutUsersInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { EnumUserDesignation } from "./EnumUserDesignation";
import { EmployeeFeedbackCreateNestedManyWithoutUsersInput } from "./EmployeeFeedbackCreateNestedManyWithoutUsersInput";
import { EnumUserGender } from "./EnumUserGender";
import { InterviewCreateNestedManyWithoutUsersInput } from "./InterviewCreateNestedManyWithoutUsersInput";
import { OpportunityCreateNestedManyWithoutUsersInput } from "./OpportunityCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { ProjectInvolvementCreateNestedManyWithoutUsersInput } from "./ProjectInvolvementCreateNestedManyWithoutUsersInput";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SkillLevelWhereUniqueInput } from "../../skillLevel/base/SkillLevelWhereUniqueInput";
import { SkillSetCreateNestedManyWithoutUsersInput } from "./SkillSetCreateNestedManyWithoutUsersInput";
import { UserCreateNestedManyWithoutUsersInput } from "./UserCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
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
    type: () => AttendanceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AttendanceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AttendanceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  attendances?: AttendanceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AwardCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AwardCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AwardCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  awards?: AwardCreateNestedManyWithoutUsersInput;

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
    type: () => CandidateCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CandidateCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CandidateCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  candidates?: CandidateCreateNestedManyWithoutUsersInput;

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
    type: () => ClientFeedbackCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ClientFeedbackCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ClientFeedbackCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  clientFeedbacks?: ClientFeedbackCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommunityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  communities?: CommunityCreateNestedManyWithoutUsersInput;

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
    type: () => CommunityActivityFeedbackCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityActivityFeedbackCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityActivityFeedbackCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  communityActivityFeedbacks?: CommunityActivityFeedbackCreateNestedManyWithoutUsersInput;

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
    type: () => EmployeeFeedbackCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmployeeFeedbackCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmployeeFeedbackCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  employeeFeedbacks?: EmployeeFeedbackCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

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
    type: () => InterviewCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => InterviewCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => InterviewCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  interviews?: InterviewCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

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
    type: () => OpportunityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OpportunityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OpportunityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  opportunities?: OpportunityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => OpportunityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OpportunityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OpportunityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  opportunity?: OpportunityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ClientFeedbackCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ClientFeedbackCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ClientFeedbackCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  organiser?: ClientFeedbackCreateNestedManyWithoutUsersInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

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
    type: () => ProjectCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  project?: ProjectCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ProjectInvolvementCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectInvolvementCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectInvolvementCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  projectInvolved?: ProjectInvolvementCreateNestedManyWithoutUsersInput;

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
    type: () => EmployeeFeedbackCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmployeeFeedbackCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmployeeFeedbackCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  reviewer?: EmployeeFeedbackCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

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
    type: () => SkillSetCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SkillSetCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SkillSetCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  skillSets?: SkillSetCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AwardCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AwardCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AwardCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  toPerson?: AwardCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  totalExperience!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutUsersInput;
}
export { UserCreateInput };

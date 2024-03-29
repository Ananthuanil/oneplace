/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
  IsEnum,
  IsJSON,
} from "class-validator";
import { Attendance } from "../../attendance/base/Attendance";
import { Type } from "class-transformer";
import { Award } from "../../award/base/Award";
import { Candidate } from "../../candidate/base/Candidate";
import { ClientFeedback } from "../../clientFeedback/base/ClientFeedback";
import { Community } from "../../community/base/Community";
import { CommunityActivityFeedback } from "../../communityActivityFeedback/base/CommunityActivityFeedback";
import { EnumUserDesignation } from "./EnumUserDesignation";
import { EmployeeFeedback } from "../../employeeFeedback/base/EmployeeFeedback";
import { EnumUserGender } from "./EnumUserGender";
import { Interview } from "../../interview/base/Interview";
import { Opportunity } from "../../opportunity/base/Opportunity";
import { Project } from "../../project/base/Project";
import { ProjectInvolvement } from "../../projectInvolvement/base/ProjectInvolvement";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { SkillLevel } from "../../skillLevel/base/SkillLevel";
import { SkillSet } from "../../skillSet/base/SkillSet";
@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  aadarNumber!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Attendance],
  })
  @ValidateNested()
  @Type(() => Attendance)
  @IsOptional()
  attendances?: Array<Attendance>;

  @ApiProperty({
    required: false,
    type: () => [Award],
  })
  @ValidateNested()
  @Type(() => Award)
  @IsOptional()
  awards?: Array<Award>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bloodGroup!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Candidate],
  })
  @ValidateNested()
  @Type(() => Candidate)
  @IsOptional()
  candidates?: Array<Candidate>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  careerStartDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [ClientFeedback],
  })
  @ValidateNested()
  @Type(() => ClientFeedback)
  @IsOptional()
  clientFeedbacks?: Array<ClientFeedback>;

  @ApiProperty({
    required: false,
    type: () => [Community],
  })
  @ValidateNested()
  @Type(() => Community)
  @IsOptional()
  communities?: Array<Community>;

  @ApiProperty({
    required: false,
    type: () => Community,
  })
  @ValidateNested()
  @Type(() => Community)
  @IsOptional()
  community?: Community | null;

  @ApiProperty({
    required: false,
    type: () => [CommunityActivityFeedback],
  })
  @ValidateNested()
  @Type(() => CommunityActivityFeedback)
  @IsOptional()
  communityActivityFeedbacks?: Array<CommunityActivityFeedback>;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  communityMentor?: User | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactNumber!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  courseOutDate!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfJoining!: Date | null;

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
  dob!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  emergencyContactNumber!: string | null;

  @ApiProperty({
    required: false,
    type: () => [EmployeeFeedback],
  })
  @ValidateNested()
  @Type(() => EmployeeFeedback)
  @IsOptional()
  employeeFeedbacks?: Array<EmployeeFeedback>;

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
  folderLink!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fwExperience!: string | null;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageLink!: string | null;

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
  notifications!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Opportunity],
  })
  @ValidateNested()
  @Type(() => Opportunity)
  @IsOptional()
  opportunities?: Array<Opportunity>;

  @ApiProperty({
    required: false,
    type: () => [Opportunity],
  })
  @ValidateNested()
  @Type(() => Opportunity)
  @IsOptional()
  opportunity?: Array<Opportunity>;

  @ApiProperty({
    required: false,
    type: () => [ClientFeedback],
  })
  @ValidateNested()
  @Type(() => ClientFeedback)
  @IsOptional()
  organiser?: Array<ClientFeedback>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  panNumber!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  personalEmailId!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  previousFirmOutDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [Project],
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  project?: Array<Project>;

  @ApiProperty({
    required: false,
    type: () => [ProjectInvolvement],
  })
  @ValidateNested()
  @Type(() => ProjectInvolvement)
  @IsOptional()
  projectInvolved?: Array<ProjectInvolvement>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resumeLink!: string | null;

  @ApiProperty({
    required: false,
    type: () => [EmployeeFeedback],
  })
  @ValidateNested()
  @Type(() => EmployeeFeedback)
  @IsOptional()
  reviewer?: Array<EmployeeFeedback>;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  secondaryEmail!: string | null;

  @ApiProperty({
    required: false,
    type: () => SkillLevel,
  })
  @ValidateNested()
  @Type(() => SkillLevel)
  @IsOptional()
  skillLevel?: SkillLevel | null;

  @ApiProperty({
    required: false,
    type: () => [SkillSet],
  })
  @ValidateNested()
  @Type(() => SkillSet)
  @IsOptional()
  skillSets?: Array<SkillSet>;

  @ApiProperty({
    required: false,
    type: () => [Award],
  })
  @ValidateNested()
  @Type(() => Award)
  @IsOptional()
  toPerson?: Array<Award>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  totalExperience!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  users?: Array<User>;
}
export { User };

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
  ValidateNested,
  IsDate,
  IsInt,
  IsEnum,
} from "class-validator";
import { Award } from "../../award/base/Award";
import { Type } from "class-transformer";
import { Candidate } from "../../candidate/base/Candidate";
import { Community } from "../../community/base/Community";
import { EnumUserGender } from "./EnumUserGender";
import { Interview } from "../../interview/base/Interview";
import { Opportunity } from "../../opportunity/base/Opportunity";
import { Project } from "../../project/base/Project";
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
  careerOutDate!: Date | null;

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
    type: () => Community,
  })
  @ValidateNested()
  @Type(() => Community)
  @IsOptional()
  community?: Community | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  contactNumber!: number | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  designation!: string | null;

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
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  emergencyContactNumber!: number | null;

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
  fwExperience!: string | null;

  @ApiProperty({
    required: true,
    enum: EnumUserGender,
  })
  @IsEnum(EnumUserGender)
  @Field(() => EnumUserGender, {
    nullable: true,
  })
  gender?: "male" | "female" | "others";

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
    type: () => [Opportunity],
  })
  @ValidateNested()
  @Type(() => Opportunity)
  @IsOptional()
  mappedPerson?: Array<Opportunity>;

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
    type: () => [Project],
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  project?: Array<Project>;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

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
}
export { User };

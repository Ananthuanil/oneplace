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
import { Candidate } from "../../candidate/base/Candidate";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { Skill } from "../../skill/base/Skill";
import { Partner } from "../../partner/base/Partner";
import { EnumOpportunityProcurementStatus } from "./EnumOpportunityProcurementStatus";
import { Project } from "../../project/base/Project";
import { EnumOpportunitySource } from "./EnumOpportunitySource";
@ObjectType()
class Opportunity {
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
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  claimedPerson?: User | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentStatus!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Candidate],
  })
  @ValidateNested()
  @Type(() => Candidate)
  @IsOptional()
  mappedCandidates?: Array<Candidate>;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  mappedEmployee?: Array<User>;

  @ApiProperty({
    required: false,
    type: () => [Candidate],
  })
  @ValidateNested()
  @Type(() => Candidate)
  @IsOptional()
  mappedPerson?: Array<Candidate>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Skill],
  })
  @ValidateNested()
  @Type(() => Skill)
  @IsOptional()
  optionalSkillset?: Array<Skill>;

  @ApiProperty({
    required: false,
    type: () => Partner,
  })
  @ValidateNested()
  @Type(() => Partner)
  @IsOptional()
  partner?: Partner | null;

  @ApiProperty({
    required: false,
    enum: EnumOpportunityProcurementStatus,
  })
  @IsEnum(EnumOpportunityProcurementStatus)
  @IsOptional()
  @Field(() => EnumOpportunityProcurementStatus, {
    nullable: true,
  })
  procurementStatus?: "new" | "replacement" | null;

  @ApiProperty({
    required: false,
    type: () => Project,
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  project?: Project | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  requiredExperience!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Skill],
  })
  @ValidateNested()
  @Type(() => Skill)
  @IsOptional()
  requiredSkills?: Array<Skill>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  requirements!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resumeId!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumOpportunitySource,
  })
  @IsEnum(EnumOpportunitySource)
  @IsOptional()
  @Field(() => EnumOpportunitySource, {
    nullable: true,
  })
  source?: "New" | "BackFill" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  winOdds!: number | null;
}
export { Opportunity };

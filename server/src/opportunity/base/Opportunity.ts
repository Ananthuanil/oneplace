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
import { User } from "../../user/base/User";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumOpportunityCurrentStatus } from "./EnumOpportunityCurrentStatus";
import { Interview } from "../../interview/base/Interview";
import { Skill } from "../../skill/base/Skill";
import { Partner } from "../../partner/base/Partner";
import { EnumOpportunitySource } from "./EnumOpportunitySource";
@ObjectType()
class Opportunity {
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
    enum: EnumOpportunityCurrentStatus,
  })
  @IsEnum(EnumOpportunityCurrentStatus)
  @IsOptional()
  @Field(() => EnumOpportunityCurrentStatus, {
    nullable: true,
  })
  currentStatus?:
    | "Lead"
    | "OpenOppurtunaty"
    | "NotQualifiedLead"
    | "Replacement"
    | "MappedAndAwaitingInterviewSlot"
    | "AwaitingInterviewFeedback"
    | "OnHold"
    | "Won"
    | "Failed"
    | null;

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
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  mappedPerson?: User | null;

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

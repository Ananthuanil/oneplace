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
import { CandidateUpdateManyWithoutOpportunitiesInput } from "./CandidateUpdateManyWithoutOpportunitiesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SkillUpdateManyWithoutOpportunitiesInput } from "./SkillUpdateManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../../partner/base/PartnerWhereUniqueInput";
import { EnumOpportunityProcurementStatus } from "./EnumOpportunityProcurementStatus";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { EnumOpportunitySource } from "./EnumOpportunitySource";
@InputType()
class OpportunityUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CandidateUpdateManyWithoutOpportunitiesInput,
  })
  @ValidateNested()
  @Type(() => CandidateUpdateManyWithoutOpportunitiesInput)
  @IsOptional()
  @Field(() => CandidateUpdateManyWithoutOpportunitiesInput, {
    nullable: true,
  })
  candidates?: CandidateUpdateManyWithoutOpportunitiesInput;

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
  claimedPerson?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currentStatus?: string | null;

  @ApiProperty({
    required: false,
    type: () => CandidateUpdateManyWithoutOpportunitiesInput,
  })
  @ValidateNested()
  @Type(() => CandidateUpdateManyWithoutOpportunitiesInput)
  @IsOptional()
  @Field(() => CandidateUpdateManyWithoutOpportunitiesInput, {
    nullable: true,
  })
  mappedPerson?: CandidateUpdateManyWithoutOpportunitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SkillUpdateManyWithoutOpportunitiesInput,
  })
  @ValidateNested()
  @Type(() => SkillUpdateManyWithoutOpportunitiesInput)
  @IsOptional()
  @Field(() => SkillUpdateManyWithoutOpportunitiesInput, {
    nullable: true,
  })
  optionalSkillset?: SkillUpdateManyWithoutOpportunitiesInput;

  @ApiProperty({
    required: false,
    type: () => PartnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PartnerWhereUniqueInput)
  @IsOptional()
  @Field(() => PartnerWhereUniqueInput, {
    nullable: true,
  })
  partner?: PartnerWhereUniqueInput | null;

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
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  requiredExperience?: number | null;

  @ApiProperty({
    required: false,
    type: () => SkillUpdateManyWithoutOpportunitiesInput,
  })
  @ValidateNested()
  @Type(() => SkillUpdateManyWithoutOpportunitiesInput)
  @IsOptional()
  @Field(() => SkillUpdateManyWithoutOpportunitiesInput, {
    nullable: true,
  })
  requiredSkills?: SkillUpdateManyWithoutOpportunitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  requirements?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resumeId?: string | null;

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
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  winOdds?: number | null;
}
export { OpportunityUpdateInput };

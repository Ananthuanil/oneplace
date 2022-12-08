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
import { CandidateListRelationFilter } from "../../candidate/base/CandidateListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityWhereUniqueInput } from "../../opportunity/base/OpportunityWhereUniqueInput";
import { SkillLevelListRelationFilter } from "../../skillLevel/base/SkillLevelListRelationFilter";
import { SkillSetListRelationFilter } from "../../skillSet/base/SkillSetListRelationFilter";
@InputType()
class SkillWhereInput {
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
  candidate?: CandidateListRelationFilter;

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
    type: () => OpportunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpportunityWhereUniqueInput)
  @IsOptional()
  @Field(() => OpportunityWhereUniqueInput, {
    nullable: true,
  })
  opportunity?: OpportunityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OpportunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpportunityWhereUniqueInput)
  @IsOptional()
  @Field(() => OpportunityWhereUniqueInput, {
    nullable: true,
  })
  oppurtunatyRequiredSkills?: OpportunityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SkillLevelListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SkillLevelListRelationFilter)
  @IsOptional()
  @Field(() => SkillLevelListRelationFilter, {
    nullable: true,
  })
  skillMatrices?: SkillLevelListRelationFilter;

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
}
export { SkillWhereInput };

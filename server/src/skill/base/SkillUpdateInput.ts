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
import { CandidateUpdateManyWithoutSkillsInput } from "./CandidateUpdateManyWithoutSkillsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { OpportunityWhereUniqueInput } from "../../opportunity/base/OpportunityWhereUniqueInput";
import { SkillLevelUpdateManyWithoutSkillsInput } from "./SkillLevelUpdateManyWithoutSkillsInput";
import { SkillSetUpdateManyWithoutSkillsInput } from "./SkillSetUpdateManyWithoutSkillsInput";
@InputType()
class SkillUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CandidateUpdateManyWithoutSkillsInput,
  })
  @ValidateNested()
  @Type(() => CandidateUpdateManyWithoutSkillsInput)
  @IsOptional()
  @Field(() => CandidateUpdateManyWithoutSkillsInput, {
    nullable: true,
  })
  candidate?: CandidateUpdateManyWithoutSkillsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

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
  opportunity?: OpportunityWhereUniqueInput | null;

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
  oppurtunatyRequiredSkills?: OpportunityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SkillLevelUpdateManyWithoutSkillsInput,
  })
  @ValidateNested()
  @Type(() => SkillLevelUpdateManyWithoutSkillsInput)
  @IsOptional()
  @Field(() => SkillLevelUpdateManyWithoutSkillsInput, {
    nullable: true,
  })
  skillMatrices?: SkillLevelUpdateManyWithoutSkillsInput;

  @ApiProperty({
    required: false,
    type: () => SkillSetUpdateManyWithoutSkillsInput,
  })
  @ValidateNested()
  @Type(() => SkillSetUpdateManyWithoutSkillsInput)
  @IsOptional()
  @Field(() => SkillSetUpdateManyWithoutSkillsInput, {
    nullable: true,
  })
  skillSets?: SkillSetUpdateManyWithoutSkillsInput;
}
export { SkillUpdateInput };

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
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { SkillSetUpdateManyWithoutSkillsInput } from "./SkillSetUpdateManyWithoutSkillsInput";
@InputType()
class SkillUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CandidateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateWhereUniqueInput)
  @IsOptional()
  @Field(() => CandidateWhereUniqueInput, {
    nullable: true,
  })
  candidate?: CandidateWhereUniqueInput | null;

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

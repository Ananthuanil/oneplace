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
import { SkillSetWhereInput } from "./SkillSetWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SkillSetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SkillSetWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillSetWhereInput)
  @IsOptional()
  @Field(() => SkillSetWhereInput, {
    nullable: true,
  })
  every?: SkillSetWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkillSetWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillSetWhereInput)
  @IsOptional()
  @Field(() => SkillSetWhereInput, {
    nullable: true,
  })
  some?: SkillSetWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkillSetWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillSetWhereInput)
  @IsOptional()
  @Field(() => SkillSetWhereInput, {
    nullable: true,
  })
  none?: SkillSetWhereInput;
}
export { SkillSetListRelationFilter };

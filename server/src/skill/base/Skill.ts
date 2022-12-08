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
import { Candidate } from "../../candidate/base/Candidate";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Opportunity } from "../../opportunity/base/Opportunity";
import { SkillLevel } from "../../skillLevel/base/SkillLevel";
import { SkillSet } from "../../skillSet/base/SkillSet";
@ObjectType()
class Skill {
  @ApiProperty({
    required: false,
    type: () => [Candidate],
  })
  @ValidateNested()
  @Type(() => Candidate)
  @IsOptional()
  candidate?: Array<Candidate>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => Opportunity,
  })
  @ValidateNested()
  @Type(() => Opportunity)
  @IsOptional()
  opportunity?: Opportunity | null;

  @ApiProperty({
    required: false,
    type: () => Opportunity,
  })
  @ValidateNested()
  @Type(() => Opportunity)
  @IsOptional()
  oppurtunatyRequiredSkills?: Opportunity | null;

  @ApiProperty({
    required: false,
    type: () => [SkillLevel],
  })
  @ValidateNested()
  @Type(() => SkillLevel)
  @IsOptional()
  skillMatrices?: Array<SkillLevel>;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
export { Skill };

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
import { ProjectInvolvementWhereInput } from "./ProjectInvolvementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProjectInvolvementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProjectInvolvementWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectInvolvementWhereInput)
  @IsOptional()
  @Field(() => ProjectInvolvementWhereInput, {
    nullable: true,
  })
  every?: ProjectInvolvementWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProjectInvolvementWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectInvolvementWhereInput)
  @IsOptional()
  @Field(() => ProjectInvolvementWhereInput, {
    nullable: true,
  })
  some?: ProjectInvolvementWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProjectInvolvementWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectInvolvementWhereInput)
  @IsOptional()
  @Field(() => ProjectInvolvementWhereInput, {
    nullable: true,
  })
  none?: ProjectInvolvementWhereInput;
}
export { ProjectInvolvementListRelationFilter };

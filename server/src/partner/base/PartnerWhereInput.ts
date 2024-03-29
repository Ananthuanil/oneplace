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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityListRelationFilter } from "../../opportunity/base/OpportunityListRelationFilter";
import { ProjectListRelationFilter } from "../../project/base/ProjectListRelationFilter";
@InputType()
class PartnerWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OpportunityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OpportunityListRelationFilter)
  @IsOptional()
  @Field(() => OpportunityListRelationFilter, {
    nullable: true,
  })
  opportunities?: OpportunityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectListRelationFilter)
  @IsOptional()
  @Field(() => ProjectListRelationFilter, {
    nullable: true,
  })
  projects?: ProjectListRelationFilter;
}
export { PartnerWhereInput };

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
import { RecruitmentPartnerWhereInput } from "./RecruitmentPartnerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RecruitmentPartnerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RecruitmentPartnerWhereInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentPartnerWhereInput)
  @IsOptional()
  @Field(() => RecruitmentPartnerWhereInput, {
    nullable: true,
  })
  every?: RecruitmentPartnerWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecruitmentPartnerWhereInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentPartnerWhereInput)
  @IsOptional()
  @Field(() => RecruitmentPartnerWhereInput, {
    nullable: true,
  })
  some?: RecruitmentPartnerWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecruitmentPartnerWhereInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentPartnerWhereInput)
  @IsOptional()
  @Field(() => RecruitmentPartnerWhereInput, {
    nullable: true,
  })
  none?: RecruitmentPartnerWhereInput;
}
export { RecruitmentPartnerListRelationFilter };
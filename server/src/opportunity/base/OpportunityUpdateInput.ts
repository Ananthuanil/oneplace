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
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { InterviewUpdateManyWithoutOpportunitiesInput } from "./InterviewUpdateManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../../partner/base/PartnerWhereUniqueInput";
import { SkillSetUpdateManyWithoutOpportunitiesInput } from "./SkillSetUpdateManyWithoutOpportunitiesInput";
import { EnumOpportunityStatus } from "./EnumOpportunityStatus";
@InputType()
class OpportunityUpdateInput {
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
    type: () => InterviewUpdateManyWithoutOpportunitiesInput,
  })
  @ValidateNested()
  @Type(() => InterviewUpdateManyWithoutOpportunitiesInput)
  @IsOptional()
  @Field(() => InterviewUpdateManyWithoutOpportunitiesInput, {
    nullable: true,
  })
  interviews?: InterviewUpdateManyWithoutOpportunitiesInput;

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
  mappedPerson?: UserWhereUniqueInput | null;

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
    type: () => SkillSetUpdateManyWithoutOpportunitiesInput,
  })
  @ValidateNested()
  @Type(() => SkillSetUpdateManyWithoutOpportunitiesInput)
  @IsOptional()
  @Field(() => SkillSetUpdateManyWithoutOpportunitiesInput, {
    nullable: true,
  })
  requiredSkillset?: SkillSetUpdateManyWithoutOpportunitiesInput;

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
    enum: EnumOpportunityStatus,
  })
  @IsEnum(EnumOpportunityStatus)
  @IsOptional()
  @Field(() => EnumOpportunityStatus, {
    nullable: true,
  })
  status?: "Awarded" | "Mapped" | "OngoingInterview" | "Closed" | null;
}
export { OpportunityUpdateInput };

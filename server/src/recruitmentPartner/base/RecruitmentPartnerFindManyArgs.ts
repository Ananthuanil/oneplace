/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecruitmentPartnerWhereInput } from "./RecruitmentPartnerWhereInput";
import { Type } from "class-transformer";
import { RecruitmentPartnerOrderByInput } from "./RecruitmentPartnerOrderByInput";

@ArgsType()
class RecruitmentPartnerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecruitmentPartnerWhereInput,
  })
  @Field(() => RecruitmentPartnerWhereInput, { nullable: true })
  @Type(() => RecruitmentPartnerWhereInput)
  where?: RecruitmentPartnerWhereInput;

  @ApiProperty({
    required: false,
    type: [RecruitmentPartnerOrderByInput],
  })
  @Field(() => [RecruitmentPartnerOrderByInput], { nullable: true })
  @Type(() => RecruitmentPartnerOrderByInput)
  orderBy?: Array<RecruitmentPartnerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RecruitmentPartnerFindManyArgs };

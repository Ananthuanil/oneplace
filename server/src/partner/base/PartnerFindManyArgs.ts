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
import { PartnerWhereInput } from "./PartnerWhereInput";
import { Type } from "class-transformer";
import { PartnerOrderByInput } from "./PartnerOrderByInput";

@ArgsType()
class PartnerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PartnerWhereInput,
  })
  @Field(() => PartnerWhereInput, { nullable: true })
  @Type(() => PartnerWhereInput)
  where?: PartnerWhereInput;

  @ApiProperty({
    required: false,
    type: [PartnerOrderByInput],
  })
  @Field(() => [PartnerOrderByInput], { nullable: true })
  @Type(() => PartnerOrderByInput)
  orderBy?: Array<PartnerOrderByInput>;

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

export { PartnerFindManyArgs };

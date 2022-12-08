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
import { ClientFeedbackWhereInput } from "./ClientFeedbackWhereInput";
import { Type } from "class-transformer";
import { ClientFeedbackOrderByInput } from "./ClientFeedbackOrderByInput";

@ArgsType()
class ClientFeedbackFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClientFeedbackWhereInput,
  })
  @Field(() => ClientFeedbackWhereInput, { nullable: true })
  @Type(() => ClientFeedbackWhereInput)
  where?: ClientFeedbackWhereInput;

  @ApiProperty({
    required: false,
    type: [ClientFeedbackOrderByInput],
  })
  @Field(() => [ClientFeedbackOrderByInput], { nullable: true })
  @Type(() => ClientFeedbackOrderByInput)
  orderBy?: Array<ClientFeedbackOrderByInput>;

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

export { ClientFeedbackFindManyArgs };

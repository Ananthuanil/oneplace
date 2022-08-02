/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectInvolvementWhereInput } from "./ProjectInvolvementWhereInput";
import { Type } from "class-transformer";
import { ProjectInvolvementOrderByInput } from "./ProjectInvolvementOrderByInput";

@ArgsType()
class ProjectInvolvementFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProjectInvolvementWhereInput,
  })
  @Field(() => ProjectInvolvementWhereInput, { nullable: true })
  @Type(() => ProjectInvolvementWhereInput)
  where?: ProjectInvolvementWhereInput;

  @ApiProperty({
    required: false,
    type: [ProjectInvolvementOrderByInput],
  })
  @Field(() => [ProjectInvolvementOrderByInput], { nullable: true })
  @Type(() => ProjectInvolvementOrderByInput)
  orderBy?: Array<ProjectInvolvementOrderByInput>;

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

export { ProjectInvolvementFindManyArgs };

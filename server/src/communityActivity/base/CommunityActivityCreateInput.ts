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
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput } from "./CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput";
@InputType()
class CommunityActivityCreateInput {
  @ApiProperty({
    required: true,
    type: () => CommunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunityWhereUniqueInput)
  @Field(() => CommunityWhereUniqueInput)
  community!: CommunityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () =>
      CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput,
  })
  @ValidateNested()
  @Type(
    () =>
      CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput
  )
  @IsOptional()
  @Field(
    () =>
      CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput,
    {
      nullable: true,
    }
  )
  communityActivityFeedbacks?: CommunityActivityFeedbackCreateNestedManyWithoutCommunityActivitiesInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { CommunityActivityCreateInput };

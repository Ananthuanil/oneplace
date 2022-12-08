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
import { CommunityActivityUpdateManyWithoutCommunitiesInput } from "./CommunityActivityUpdateManyWithoutCommunitiesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutCommunitiesInput } from "./UserUpdateManyWithoutCommunitiesInput";
@InputType()
class CommunityUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommunityActivityUpdateManyWithoutCommunitiesInput,
  })
  @ValidateNested()
  @Type(() => CommunityActivityUpdateManyWithoutCommunitiesInput)
  @IsOptional()
  @Field(() => CommunityActivityUpdateManyWithoutCommunitiesInput, {
    nullable: true,
  })
  communityActivities?: CommunityActivityUpdateManyWithoutCommunitiesInput;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutCommunitiesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutCommunitiesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutCommunitiesInput, {
    nullable: true,
  })
  communityLeads?: UserUpdateManyWithoutCommunitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

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
    type: () => UserUpdateManyWithoutCommunitiesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutCommunitiesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutCommunitiesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutCommunitiesInput;
}
export { CommunityUpdateInput };

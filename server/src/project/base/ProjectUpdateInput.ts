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
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { OpportunityUpdateManyWithoutProjectsInput } from "./OpportunityUpdateManyWithoutProjectsInput";
import { Type } from "class-transformer";
import { PartnerWhereUniqueInput } from "../../partner/base/PartnerWhereUniqueInput";
import { ProjectInvolvementUpdateManyWithoutProjectsInput } from "./ProjectInvolvementUpdateManyWithoutProjectsInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";
@InputType()
class ProjectUpdateInput {
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
    type: () => OpportunityUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => OpportunityUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => OpportunityUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  opportunities?: OpportunityUpdateManyWithoutProjectsInput;

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
    type: () => ProjectInvolvementUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectInvolvementUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectInvolvementUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  projectInvolvements?: ProjectInvolvementUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutProjectsInput;
}
export { ProjectUpdateInput };

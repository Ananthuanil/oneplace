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
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { OpportunityCreateNestedManyWithoutProjectsInput } from "./OpportunityCreateNestedManyWithoutProjectsInput";
import { Type } from "class-transformer";
import { PartnerWhereUniqueInput } from "../../partner/base/PartnerWhereUniqueInput";
import { ProjectInvolvementCreateNestedManyWithoutProjectsInput } from "./ProjectInvolvementCreateNestedManyWithoutProjectsInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";
@InputType()
class ProjectCreateInput {
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
    type: () => OpportunityCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => OpportunityCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => OpportunityCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  opportunities?: OpportunityCreateNestedManyWithoutProjectsInput;

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
    type: () => ProjectInvolvementCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectInvolvementCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectInvolvementCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  projectInvolvements?: ProjectInvolvementCreateNestedManyWithoutProjectsInput;

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
    type: () => TaskCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => TaskCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => TaskCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  tasks?: TaskCreateNestedManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutProjectsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutProjectsInput;
}
export { ProjectCreateInput };

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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { OpportunityCreateNestedManyWithoutPartnersInput } from "./OpportunityCreateNestedManyWithoutPartnersInput";
import { Type } from "class-transformer";
import { ProjectCreateNestedManyWithoutPartnersInput } from "./ProjectCreateNestedManyWithoutPartnersInput";
@InputType()
class PartnerCreateInput {
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
    type: () => OpportunityCreateNestedManyWithoutPartnersInput,
  })
  @ValidateNested()
  @Type(() => OpportunityCreateNestedManyWithoutPartnersInput)
  @IsOptional()
  @Field(() => OpportunityCreateNestedManyWithoutPartnersInput, {
    nullable: true,
  })
  opportunities?: OpportunityCreateNestedManyWithoutPartnersInput;

  @ApiProperty({
    required: false,
    type: () => ProjectCreateNestedManyWithoutPartnersInput,
  })
  @ValidateNested()
  @Type(() => ProjectCreateNestedManyWithoutPartnersInput)
  @IsOptional()
  @Field(() => ProjectCreateNestedManyWithoutPartnersInput, {
    nullable: true,
  })
  projects?: ProjectCreateNestedManyWithoutPartnersInput;
}
export { PartnerCreateInput };

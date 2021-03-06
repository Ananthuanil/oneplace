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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
  IsInt,
  IsEnum,
} from "class-validator";
import { AwardCreateNestedManyWithoutUsersInput } from "./AwardCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { CandidateCreateNestedManyWithoutUsersInput } from "./CandidateCreateNestedManyWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { EnumUserGender } from "./EnumUserGender";
import { InterviewCreateNestedManyWithoutUsersInput } from "./InterviewCreateNestedManyWithoutUsersInput";
import { OpportunityCreateNestedManyWithoutUsersInput } from "./OpportunityCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { SkillSetCreateNestedManyWithoutUsersInput } from "./SkillSetCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  aadarNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => AwardCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AwardCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AwardCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  awards?: AwardCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bloodGroup?: string | null;

  @ApiProperty({
    required: false,
    type: () => CandidateCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CandidateCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CandidateCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  candidates?: CandidateCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  careerOutDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  careerStartDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => CommunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunityWhereUniqueInput)
  @IsOptional()
  @Field(() => CommunityWhereUniqueInput, {
    nullable: true,
  })
  community?: CommunityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  contactNumber?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfJoining?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  designation?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dob?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  emergencyContactNumber?: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fwExperience?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumUserGender,
  })
  @IsEnum(EnumUserGender)
  @Field(() => EnumUserGender)
  gender!: "male" | "female" | "others";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;

  @ApiProperty({
    required: false,
    type: () => InterviewCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => InterviewCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => InterviewCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  interviews?: InterviewCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: false,
    type: () => OpportunityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OpportunityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OpportunityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  mappedPerson?: OpportunityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => OpportunityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OpportunityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OpportunityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  opportunities?: OpportunityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  panNumber?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  personalEmailId?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProjectCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  project?: ProjectCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: () => SkillSetCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SkillSetCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SkillSetCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  skillSets?: SkillSetCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AwardCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AwardCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AwardCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  toPerson?: AwardCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  totalExperience!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };

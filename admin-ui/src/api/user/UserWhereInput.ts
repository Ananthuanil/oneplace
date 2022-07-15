import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AwardListRelationFilter } from "../award/AwardListRelationFilter";
import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";

export type UserWhereInput = {
  aadarNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  awards?: AwardListRelationFilter;
  bloodGroup?: StringNullableFilter;
  candidates?: CandidateListRelationFilter;
  careerOutDate?: DateTimeNullableFilter;
  careerStartDate?: DateTimeNullableFilter;
  community?: CommunityWhereUniqueInput;
  contactNumber?: IntNullableFilter;
  dateOfJoining?: DateTimeNullableFilter;
  designation?: StringNullableFilter;
  dob?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  emergencyContactNumber?: IntNullableFilter;
  firstName?: StringFilter;
  fwExperience?: StringNullableFilter;
  gender?: "male" | "female" | "others";
  id?: StringFilter;
  image?: StringNullableFilter;
  interviews?: InterviewListRelationFilter;
  lastName?: StringFilter;
  mappedPerson?: OpportunityListRelationFilter;
  opportunities?: OpportunityListRelationFilter;
  panNumber?: StringNullableFilter;
  personalEmailId?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  skillSets?: SkillSetListRelationFilter;
  toPerson?: AwardListRelationFilter;
  totalExperience?: StringFilter;
  username?: StringFilter;
};

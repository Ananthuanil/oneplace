import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AwardListRelationFilter } from "../award/AwardListRelationFilter";
import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { ProjectInvolvementListRelationFilter } from "../projectInvolvement/ProjectInvolvementListRelationFilter";
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
  contactNumber?: StringNullableFilter;
  courseOutDate?: DateTimeNullableFilter;
  dateOfJoining?: DateTimeNullableFilter;
  designation?:
    | "Joe"
    | "Engineer"
    | "SeniorEngineer"
    | "Consultant"
    | "SeniorConsultant"
    | "PrincipalConsultant"
    | "Director"
    | "Cxo";
  dob?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  emergencyContactNumber?: StringNullableFilter;
  firstName?: StringFilter;
  folderLink?: StringNullableFilter;
  fwExperience?: StringNullableFilter;
  gender?: "Male" | "Female" | "Others";
  id?: StringFilter;
  image?: StringNullableFilter;
  imageLink?: StringNullableFilter;
  interviews?: InterviewListRelationFilter;
  lastName?: StringFilter;
  mappedPerson?: OpportunityListRelationFilter;
  opportunities?: OpportunityListRelationFilter;
  panNumber?: StringNullableFilter;
  personalEmailId?: StringNullableFilter;
  project?: ProjectListRelationFilter;
  projectInvolved?: ProjectInvolvementListRelationFilter;
  resumeLink?: StringNullableFilter;
  skillSets?: SkillSetListRelationFilter;
  toPerson?: AwardListRelationFilter;
  totalExperience?: StringFilter;
  username?: StringFilter;
};

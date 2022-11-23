import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AwardListRelationFilter } from "../award/AwardListRelationFilter";
import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientFeedbackListRelationFilter } from "../clientFeedback/ClientFeedbackListRelationFilter";
import { CommunityListRelationFilter } from "../community/CommunityListRelationFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackListRelationFilter } from "../communityActivityFeedback/CommunityActivityFeedbackListRelationFilter";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { EmployeeFeedbackListRelationFilter } from "../employeeFeedback/EmployeeFeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { OpportunityListRelationFilter } from "../opportunity/OpportunityListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { ProjectInvolvementListRelationFilter } from "../projectInvolvement/ProjectInvolvementListRelationFilter";
import { SkillLevelWhereUniqueInput } from "../skillLevel/SkillLevelWhereUniqueInput";
import { SkillSetListRelationFilter } from "../skillSet/SkillSetListRelationFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";

export type UserWhereInput = {
  aadarNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  awards?: AwardListRelationFilter;
  bloodGroup?: StringNullableFilter;
  candidates?: CandidateListRelationFilter;
  careerStartDate?: DateTimeNullableFilter;
  clientFeedbacks?: ClientFeedbackListRelationFilter;
  communities?: CommunityListRelationFilter;
  community?: CommunityWhereUniqueInput;
  communityActivityFeedbacks?: CommunityActivityFeedbackListRelationFilter;
  communityMentor?: UserWhereUniqueInput;
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
  employeeFeedbacks?: EmployeeFeedbackListRelationFilter;
  firstName?: StringFilter;
  folderLink?: StringNullableFilter;
  fwExperience?: StringNullableFilter;
  gender?: "Male" | "Female" | "Others";
  id?: StringFilter;
  image?: StringNullableFilter;
  imageLink?: StringNullableFilter;
  interviews?: InterviewListRelationFilter;
  lastName?: StringFilter;
  notifications?: StringNullableFilter;
  opportunities?: OpportunityListRelationFilter;
  opportunity?: OpportunityListRelationFilter;
  organiser?: ClientFeedbackListRelationFilter;
  panNumber?: StringNullableFilter;
  personalEmailId?: StringNullableFilter;
  previousFirmOutDate?: DateTimeNullableFilter;
  project?: ProjectListRelationFilter;
  projectInvolved?: ProjectInvolvementListRelationFilter;
  resumeLink?: StringNullableFilter;
  reviewer?: EmployeeFeedbackListRelationFilter;
  secondaryEmail?: StringNullableFilter;
  skillLevel?: SkillLevelWhereUniqueInput;
  skillSets?: SkillSetListRelationFilter;
  toPerson?: AwardListRelationFilter;
  totalExperience?: StringFilter;
  username?: StringFilter;
  users?: UserListRelationFilter;
};

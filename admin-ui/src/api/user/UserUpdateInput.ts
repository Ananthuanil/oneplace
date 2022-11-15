import { AwardUpdateManyWithoutUsersInput } from "./AwardUpdateManyWithoutUsersInput";
import { CandidateUpdateManyWithoutUsersInput } from "./CandidateUpdateManyWithoutUsersInput";
import { ClientFeedbackUpdateManyWithoutUsersInput } from "./ClientFeedbackUpdateManyWithoutUsersInput";
import { CommunityUpdateManyWithoutUsersInput } from "./CommunityUpdateManyWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackUpdateManyWithoutUsersInput } from "./CommunityActivityFeedbackUpdateManyWithoutUsersInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { EmployeeFeedbackUpdateManyWithoutUsersInput } from "./EmployeeFeedbackUpdateManyWithoutUsersInput";
import { InterviewUpdateManyWithoutUsersInput } from "./InterviewUpdateManyWithoutUsersInput";
import { OpportunityUpdateManyWithoutUsersInput } from "./OpportunityUpdateManyWithoutUsersInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { ProjectInvolvementUpdateManyWithoutUsersInput } from "./ProjectInvolvementUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SkillLevelWhereUniqueInput } from "../skillLevel/SkillLevelWhereUniqueInput";
import { SkillSetUpdateManyWithoutUsersInput } from "./SkillSetUpdateManyWithoutUsersInput";
import { UserUpdateManyWithoutUsersInput } from "./UserUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  aadarNumber?: string | null;
  address?: string | null;
  awards?: AwardUpdateManyWithoutUsersInput;
  bloodGroup?: string | null;
  candidates?: CandidateUpdateManyWithoutUsersInput;
  careerStartDate?: Date | null;
  clientFeedbacks?: ClientFeedbackUpdateManyWithoutUsersInput;
  communities?: CommunityUpdateManyWithoutUsersInput;
  community?: CommunityWhereUniqueInput | null;
  communityActivityFeedbacks?: CommunityActivityFeedbackUpdateManyWithoutUsersInput;
  communityMentor?: UserWhereUniqueInput | null;
  contactNumber?: string | null;
  courseOutDate?: Date | null;
  dateOfJoining?: Date | null;
  designation?:
    | "Joe"
    | "Engineer"
    | "SeniorEngineer"
    | "Consultant"
    | "SeniorConsultant"
    | "PrincipalConsultant"
    | "Director"
    | "Cxo"
    | null;
  dob?: Date | null;
  email?: string | null;
  emergencyContactNumber?: string | null;
  employeeFeedbacks?: EmployeeFeedbackUpdateManyWithoutUsersInput;
  firstName?: string;
  folderLink?: string | null;
  fwExperience?: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  image?: string | null;
  imageLink?: string | null;
  interviews?: InterviewUpdateManyWithoutUsersInput;
  lastName?: string;
  notifications?: string | null;
  opportunities?: OpportunityUpdateManyWithoutUsersInput;
  panNumber?: string | null;
  password?: string;
  personalEmailId?: string | null;
  previousFirmOutDate?: Date | null;
  project?: ProjectUpdateManyWithoutUsersInput;
  projectInvolved?: ProjectInvolvementUpdateManyWithoutUsersInput;
  resumeLink?: string | null;
  reviewer?: EmployeeFeedbackUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  secondaryEmail?: string | null;
  skillLevel?: SkillLevelWhereUniqueInput | null;
  skillSets?: SkillSetUpdateManyWithoutUsersInput;
  toPerson?: AwardUpdateManyWithoutUsersInput;
  totalExperience?: string;
  username?: string;
  users?: UserUpdateManyWithoutUsersInput;
};

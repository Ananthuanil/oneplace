import { AttendanceCreateNestedManyWithoutUsersInput } from "./AttendanceCreateNestedManyWithoutUsersInput";
import { AwardCreateNestedManyWithoutUsersInput } from "./AwardCreateNestedManyWithoutUsersInput";
import { CandidateCreateNestedManyWithoutUsersInput } from "./CandidateCreateNestedManyWithoutUsersInput";
import { ClientFeedbackCreateNestedManyWithoutUsersInput } from "./ClientFeedbackCreateNestedManyWithoutUsersInput";
import { CommunityCreateNestedManyWithoutUsersInput } from "./CommunityCreateNestedManyWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { CommunityActivityFeedbackCreateNestedManyWithoutUsersInput } from "./CommunityActivityFeedbackCreateNestedManyWithoutUsersInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { EmployeeFeedbackCreateNestedManyWithoutUsersInput } from "./EmployeeFeedbackCreateNestedManyWithoutUsersInput";
import { InterviewCreateNestedManyWithoutUsersInput } from "./InterviewCreateNestedManyWithoutUsersInput";
import { OpportunityCreateNestedManyWithoutUsersInput } from "./OpportunityCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { ProjectInvolvementCreateNestedManyWithoutUsersInput } from "./ProjectInvolvementCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SkillLevelWhereUniqueInput } from "../skillLevel/SkillLevelWhereUniqueInput";
import { SkillSetCreateNestedManyWithoutUsersInput } from "./SkillSetCreateNestedManyWithoutUsersInput";
import { UserCreateNestedManyWithoutUsersInput } from "./UserCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  aadarNumber?: string | null;
  address?: string | null;
  attendances?: AttendanceCreateNestedManyWithoutUsersInput;
  awards?: AwardCreateNestedManyWithoutUsersInput;
  bloodGroup?: string | null;
  candidates?: CandidateCreateNestedManyWithoutUsersInput;
  careerStartDate?: Date | null;
  clientFeedbacks?: ClientFeedbackCreateNestedManyWithoutUsersInput;
  communities?: CommunityCreateNestedManyWithoutUsersInput;
  community?: CommunityWhereUniqueInput | null;
  communityActivityFeedbacks?: CommunityActivityFeedbackCreateNestedManyWithoutUsersInput;
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
  employeeFeedbacks?: EmployeeFeedbackCreateNestedManyWithoutUsersInput;
  firstName: string;
  folderLink?: string | null;
  fwExperience?: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  image?: string | null;
  imageLink?: string | null;
  interviews?: InterviewCreateNestedManyWithoutUsersInput;
  lastName: string;
  notifications?: string | null;
  opportunities?: OpportunityCreateNestedManyWithoutUsersInput;
  opportunity?: OpportunityCreateNestedManyWithoutUsersInput;
  organiser?: ClientFeedbackCreateNestedManyWithoutUsersInput;
  panNumber?: string | null;
  password: string;
  personalEmailId?: string | null;
  previousFirmOutDate?: Date | null;
  project?: ProjectCreateNestedManyWithoutUsersInput;
  projectInvolved?: ProjectInvolvementCreateNestedManyWithoutUsersInput;
  resumeLink?: string | null;
  reviewer?: EmployeeFeedbackCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  secondaryEmail?: string | null;
  skillLevel?: SkillLevelWhereUniqueInput | null;
  skillSets?: SkillSetCreateNestedManyWithoutUsersInput;
  toPerson?: AwardCreateNestedManyWithoutUsersInput;
  totalExperience: string;
  username: string;
  users?: UserCreateNestedManyWithoutUsersInput;
};

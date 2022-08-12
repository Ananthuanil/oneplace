import { AwardCreateNestedManyWithoutUsersInput } from "./AwardCreateNestedManyWithoutUsersInput";
import { CandidateCreateNestedManyWithoutUsersInput } from "./CandidateCreateNestedManyWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { InterviewCreateNestedManyWithoutUsersInput } from "./InterviewCreateNestedManyWithoutUsersInput";
import { OpportunityCreateNestedManyWithoutUsersInput } from "./OpportunityCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { ProjectInvolvementCreateNestedManyWithoutUsersInput } from "./ProjectInvolvementCreateNestedManyWithoutUsersInput";
import { SkillSetCreateNestedManyWithoutUsersInput } from "./SkillSetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  aadarNumber?: string | null;
  address?: string | null;
  awards?: AwardCreateNestedManyWithoutUsersInput;
  bloodGroup?: string | null;
  candidates?: CandidateCreateNestedManyWithoutUsersInput;
  careerStartDate?: Date | null;
  community?: CommunityWhereUniqueInput | null;
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
  firstName: string;
  folderLink?: string | null;
  fwExperience?: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  image?: string | null;
  imageLink?: string | null;
  interviews?: InterviewCreateNestedManyWithoutUsersInput;
  lastName: string;
  mappedPerson?: OpportunityCreateNestedManyWithoutUsersInput;
  opportunities?: OpportunityCreateNestedManyWithoutUsersInput;
  panNumber?: string | null;
  password: string;
  personalEmailId?: string | null;
  previousFirmOutDate?: Date | null;
  project?: ProjectCreateNestedManyWithoutUsersInput;
  projectInvolved?: ProjectInvolvementCreateNestedManyWithoutUsersInput;
  resumeLink?: string | null;
  roles: Array<string>;
  skillSets?: SkillSetCreateNestedManyWithoutUsersInput;
  toPerson?: AwardCreateNestedManyWithoutUsersInput;
  totalExperience: string;
  username: string;
};

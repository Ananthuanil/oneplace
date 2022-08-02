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
  careerOutDate?: Date | null;
  careerStartDate?: Date | null;
  community?: CommunityWhereUniqueInput | null;
  contactNumber?: number | null;
  dateOfJoining?: Date | null;
  designation?: string | null;
  dob?: Date | null;
  email?: string | null;
  emergencyContactNumber?: number | null;
  firstName: string;
  fwExperience?: string | null;
  gender: "male" | "female" | "others";
  image?: string | null;
  interviews?: InterviewCreateNestedManyWithoutUsersInput;
  lastName: string;
  mappedPerson?: OpportunityCreateNestedManyWithoutUsersInput;
  opportunities?: OpportunityCreateNestedManyWithoutUsersInput;
  panNumber?: string | null;
  password: string;
  personalEmailId?: string | null;
  project?: ProjectCreateNestedManyWithoutUsersInput;
  projectInvolved?: ProjectInvolvementCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  skillSets?: SkillSetCreateNestedManyWithoutUsersInput;
  toPerson?: AwardCreateNestedManyWithoutUsersInput;
  totalExperience: string;
  username: string;
};

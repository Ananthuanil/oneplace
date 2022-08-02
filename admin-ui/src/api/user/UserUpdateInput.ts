import { AwardUpdateManyWithoutUsersInput } from "./AwardUpdateManyWithoutUsersInput";
import { CandidateUpdateManyWithoutUsersInput } from "./CandidateUpdateManyWithoutUsersInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { InterviewUpdateManyWithoutUsersInput } from "./InterviewUpdateManyWithoutUsersInput";
import { OpportunityUpdateManyWithoutUsersInput } from "./OpportunityUpdateManyWithoutUsersInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { ProjectInvolvementUpdateManyWithoutUsersInput } from "./ProjectInvolvementUpdateManyWithoutUsersInput";
import { SkillSetUpdateManyWithoutUsersInput } from "./SkillSetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  aadarNumber?: string | null;
  address?: string | null;
  awards?: AwardUpdateManyWithoutUsersInput;
  bloodGroup?: string | null;
  candidates?: CandidateUpdateManyWithoutUsersInput;
  careerOutDate?: Date | null;
  careerStartDate?: Date | null;
  community?: CommunityWhereUniqueInput | null;
  contactNumber?: number | null;
  dateOfJoining?: Date | null;
  designation?: string | null;
  dob?: Date | null;
  email?: string | null;
  emergencyContactNumber?: number | null;
  firstName?: string;
  folderLink?: string | null;
  fwExperience?: string | null;
  gender?: "male" | "female" | "others";
  image?: string | null;
  interviews?: InterviewUpdateManyWithoutUsersInput;
  lastName?: string;
  mappedPerson?: OpportunityUpdateManyWithoutUsersInput;
  opportunities?: OpportunityUpdateManyWithoutUsersInput;
  panNumber?: string | null;
  password?: string;
  personalEmailId?: string | null;
  project?: ProjectUpdateManyWithoutUsersInput;
  projectInvolved?: ProjectInvolvementUpdateManyWithoutUsersInput;
  resumeLink?: string | null;
  roles?: Array<string>;
  skillSets?: SkillSetUpdateManyWithoutUsersInput;
  toPerson?: AwardUpdateManyWithoutUsersInput;
  totalExperience?: string;
  username?: string;
};

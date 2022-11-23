import { CandidateUpdateManyWithoutOpportunitiesInput } from "./CandidateUpdateManyWithoutOpportunitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserUpdateManyWithoutOpportunitiesInput } from "./UserUpdateManyWithoutOpportunitiesInput";
import { SkillUpdateManyWithoutOpportunitiesInput } from "./SkillUpdateManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type OpportunityUpdateInput = {
  candidates?: CandidateUpdateManyWithoutOpportunitiesInput;
  claimedPerson?: UserWhereUniqueInput | null;
  currentStatus?: string | null;
  mappedCandidates?: CandidateUpdateManyWithoutOpportunitiesInput;
  mappedEmployee?: UserUpdateManyWithoutOpportunitiesInput;
  mappedPerson?: CandidateUpdateManyWithoutOpportunitiesInput;
  name?: string | null;
  optionalSkillset?: SkillUpdateManyWithoutOpportunitiesInput;
  partner?: PartnerWhereUniqueInput | null;
  procurementStatus?: "new" | "replacement" | null;
  project?: ProjectWhereUniqueInput | null;
  requiredExperience?: number | null;
  requiredSkills?: SkillUpdateManyWithoutOpportunitiesInput;
  requirements?: string | null;
  resumeId?: string | null;
  source?: "New" | "BackFill" | null;
  winOdds?: number | null;
};

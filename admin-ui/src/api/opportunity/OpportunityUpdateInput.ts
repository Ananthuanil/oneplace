import { CandidateUpdateManyWithoutOpportunitiesInput } from "./CandidateUpdateManyWithoutOpportunitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { SkillUpdateManyWithoutOpportunitiesInput } from "./SkillUpdateManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type OpportunityUpdateInput = {
  candidates?: CandidateUpdateManyWithoutOpportunitiesInput;
  claimedPerson?: UserWhereUniqueInput | null;
  currentStatus?: string | null;
  mappedCandidates?: CandidateWhereUniqueInput | null;
  mappedEmployee?: UserWhereUniqueInput | null;
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

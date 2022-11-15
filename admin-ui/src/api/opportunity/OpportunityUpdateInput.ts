import { CandidateUpdateManyWithoutOpportunitiesInput } from "./CandidateUpdateManyWithoutOpportunitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SkillUpdateManyWithoutOpportunitiesInput } from "./SkillUpdateManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type OpportunityUpdateInput = {
  candidates?: CandidateUpdateManyWithoutOpportunitiesInput;
  claimedPerson?: UserWhereUniqueInput | null;
  currentStatus?: string | null;
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

import { CandidateCreateNestedManyWithoutOpportunitiesInput } from "./CandidateCreateNestedManyWithoutOpportunitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { SkillCreateNestedManyWithoutOpportunitiesInput } from "./SkillCreateNestedManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type OpportunityCreateInput = {
  candidates?: CandidateCreateNestedManyWithoutOpportunitiesInput;
  claimedPerson?: UserWhereUniqueInput | null;
  currentStatus?: string | null;
  mappedCandidates?: CandidateWhereUniqueInput | null;
  mappedEmployee?: UserWhereUniqueInput | null;
  mappedPerson?: CandidateCreateNestedManyWithoutOpportunitiesInput;
  name?: string | null;
  optionalSkillset?: SkillCreateNestedManyWithoutOpportunitiesInput;
  partner?: PartnerWhereUniqueInput | null;
  procurementStatus?: "new" | "replacement" | null;
  project?: ProjectWhereUniqueInput | null;
  requiredExperience?: number | null;
  requiredSkills?: SkillCreateNestedManyWithoutOpportunitiesInput;
  requirements?: string | null;
  resumeId?: string | null;
  source?: "New" | "BackFill" | null;
  winOdds?: number | null;
};

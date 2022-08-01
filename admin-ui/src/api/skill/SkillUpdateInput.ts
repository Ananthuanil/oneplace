import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillSetUpdateManyWithoutSkillsInput } from "./SkillSetUpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  name?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  skillSets?: SkillSetUpdateManyWithoutSkillsInput;
};

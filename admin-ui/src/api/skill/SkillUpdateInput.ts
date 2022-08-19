import { CandidateUpdateManyWithoutSkillsInput } from "./CandidateUpdateManyWithoutSkillsInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillLevelUpdateManyWithoutSkillsInput } from "./SkillLevelUpdateManyWithoutSkillsInput";
import { SkillSetUpdateManyWithoutSkillsInput } from "./SkillSetUpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  candidate?: CandidateUpdateManyWithoutSkillsInput;
  name?: string;
  opportunity?: OpportunityWhereUniqueInput | null;
  oppurtunatyRequiredSkills?: OpportunityWhereUniqueInput | null;
  skillMatrices?: SkillLevelUpdateManyWithoutSkillsInput;
  skillSets?: SkillSetUpdateManyWithoutSkillsInput;
};

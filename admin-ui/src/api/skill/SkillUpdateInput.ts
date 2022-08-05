import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillLevelUpdateManyWithoutSkillsInput } from "./SkillLevelUpdateManyWithoutSkillsInput";
import { SkillSetUpdateManyWithoutSkillsInput } from "./SkillSetUpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  name?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  oppurtunatyRequiredSkills?: OpportunityWhereUniqueInput | null;
  skillMatrices?: SkillLevelUpdateManyWithoutSkillsInput;
  skillSets?: SkillSetUpdateManyWithoutSkillsInput;
};

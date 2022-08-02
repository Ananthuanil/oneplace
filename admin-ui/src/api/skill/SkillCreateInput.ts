import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillSetCreateNestedManyWithoutSkillsInput } from "./SkillSetCreateNestedManyWithoutSkillsInput";

export type SkillCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  name?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  oppurtunatyRequiredSkills?: OpportunityWhereUniqueInput | null;
  skillSets?: SkillSetCreateNestedManyWithoutSkillsInput;
};

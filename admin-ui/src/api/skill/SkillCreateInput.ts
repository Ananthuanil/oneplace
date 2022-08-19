import { CandidateCreateNestedManyWithoutSkillsInput } from "./CandidateCreateNestedManyWithoutSkillsInput";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { SkillLevelCreateNestedManyWithoutSkillsInput } from "./SkillLevelCreateNestedManyWithoutSkillsInput";
import { SkillSetCreateNestedManyWithoutSkillsInput } from "./SkillSetCreateNestedManyWithoutSkillsInput";

export type SkillCreateInput = {
  candidate?: CandidateCreateNestedManyWithoutSkillsInput;
  name: string;
  opportunity?: OpportunityWhereUniqueInput | null;
  oppurtunatyRequiredSkills?: OpportunityWhereUniqueInput | null;
  skillMatrices?: SkillLevelCreateNestedManyWithoutSkillsInput;
  skillSets?: SkillSetCreateNestedManyWithoutSkillsInput;
};

import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { SkillSetUpdateManyWithoutSkillsInput } from "./SkillSetUpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  name?: string | null;
  skillSets?: SkillSetUpdateManyWithoutSkillsInput;
};

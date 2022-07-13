import { Candidate } from "../candidate/Candidate";
import { SkillSet } from "../skillSet/SkillSet";

export type Skill = {
  candidate?: Candidate | null;
  createdAt: Date;
  id: string;
  name: string | null;
  skillSets?: Array<SkillSet>;
  updatedAt: Date | null;
};

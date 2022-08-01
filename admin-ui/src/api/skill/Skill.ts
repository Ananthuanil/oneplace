import { Candidate } from "../candidate/Candidate";
import { Opportunity } from "../opportunity/Opportunity";
import { SkillSet } from "../skillSet/SkillSet";

export type Skill = {
  candidate?: Candidate | null;
  createdAt: Date;
  id: string;
  name: string | null;
  opportunity?: Opportunity | null;
  skillSets?: Array<SkillSet>;
  updatedAt: Date | null;
};

import { Candidate } from "../candidate/Candidate";
import { Opportunity } from "../opportunity/Opportunity";
import { SkillLevel } from "../skillLevel/SkillLevel";
import { SkillSet } from "../skillSet/SkillSet";

export type Skill = {
  candidate?: Array<Candidate>;
  createdAt: Date;
  id: string;
  name: string;
  opportunity?: Opportunity | null;
  oppurtunatyRequiredSkills?: Opportunity | null;
  skillMatrices?: Array<SkillLevel>;
  skillSets?: Array<SkillSet>;
  updatedAt: Date | null;
};

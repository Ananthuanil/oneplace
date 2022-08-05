import { Candidate } from "../candidate/Candidate";
import { Opportunity } from "../opportunity/Opportunity";
import { SkillLevel } from "../skillLevel/SkillLevel";
import { SkillSet } from "../skillSet/SkillSet";

export type Skill = {
  candidate?: Candidate | null;
  createdAt: Date;
  id: string;
  name: string | null;
  opportunity?: Opportunity | null;
  oppurtunatyRequiredSkills?: Opportunity | null;
  skillMatrices?: Array<SkillLevel>;
  skillSets?: Array<SkillSet>;
  updatedAt: Date | null;
};

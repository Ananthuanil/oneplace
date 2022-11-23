import { Candidate } from "../candidate/Candidate";
import { User } from "../user/User";
import { Skill } from "../skill/Skill";
import { Partner } from "../partner/Partner";
import { Project } from "../project/Project";

export type Opportunity = {
  candidates?: Array<Candidate>;
  claimedPerson?: User | null;
  createdAt: Date;
  currentStatus: string | null;
  id: string;
  mappedCandidates?: Array<Candidate>;
  mappedEmployee?: Array<User>;
  mappedPerson?: Array<Candidate>;
  name: string | null;
  optionalSkillset?: Array<Skill>;
  partner?: Partner | null;
  procurementStatus?: "new" | "replacement" | null;
  project?: Project | null;
  requiredExperience: number | null;
  requiredSkills?: Array<Skill>;
  requirements: string | null;
  resumeId: string | null;
  source?: "New" | "BackFill" | null;
  updatedAt: Date;
  winOdds: number | null;
};

import { User } from "../user/User";
import { Interview } from "../interview/Interview";
import { Skill } from "../skill/Skill";
import { Partner } from "../partner/Partner";
import { SkillSet } from "../skillSet/SkillSet";

export type Opportunity = {
  claimedPerson?: User | null;
  createdAt: Date;
  currentStatus?:
    | "Lead"
    | "OpenOppurtunaty"
    | "NotQualifiedLead"
    | "Replacement"
    | "MappedAndAwaitingInterviewSlot"
    | "AwaitingInterviewFeedback"
    | "OnHold"
    | "Won"
    | "Failed"
    | null;
  id: string;
  interviews?: Array<Interview>;
  mappedPerson?: User | null;
  name: string | null;
  optionalSkillset?: Array<Skill>;
  partner?: Partner | null;
  requiredExperience: number | null;
  requiredSkillset?: Array<SkillSet>;
  requirements: string | null;
  source?: "New" | "BackFill" | null;
  updatedAt: Date;
  winOdds: number | null;
};

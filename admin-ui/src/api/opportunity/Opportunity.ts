import { User } from "../user/User";
import { Interview } from "../interview/Interview";
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
  partner?: Partner | null;
  requiredExperience: number | null;
  requiredSkillset?: Array<SkillSet>;
  requirements: string | null;
  updatedAt: Date;
};

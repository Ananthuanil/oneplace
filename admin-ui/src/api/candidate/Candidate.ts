import { Interview } from "../interview/Interview";
import { User } from "../user/User";
import { Skill } from "../skill/Skill";
import { SkillSet } from "../skillSet/SkillSet";

export type Candidate = {
  additionalComments: string | null;
  category?: "P1" | "P2" | "P3";
  competitorCtc: number | null;
  createdAt: Date;
  currentCtc: number | null;
  currentDesignation: string | null;
  currentFirm: string | null;
  currentStatus?:
    | "Parked"
    | "AwaitingInterview"
    | "InterviewScheduled"
    | "InterviewSelected"
    | "OfferReleased"
    | "Joined"
    | "OfferRejected";
  email: string;
  expectedCtc: number | null;
  externalRecruitmentPartner: string | null;
  id: string;
  interviews?: Array<Interview>;
  isOnNoticePeriod: boolean;
  lastWorkingDay: Date | null;
  name: string;
  noticePeriodTime: number | null;
  referalEmployee?: User | null;
  resume: string | null;
  skills?: Array<Skill>;
  skillSets?: Array<SkillSet>;
  source?: "Internal" | "Referral" | "ExternalRecruitmentPartner";
  totalExperience: number;
  updatedAt: Date;
};

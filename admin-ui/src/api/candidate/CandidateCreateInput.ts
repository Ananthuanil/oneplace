import { InterviewCreateNestedManyWithoutCandidatesInput } from "./InterviewCreateNestedManyWithoutCandidatesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SkillCreateNestedManyWithoutCandidatesInput } from "./SkillCreateNestedManyWithoutCandidatesInput";
import { SkillSetCreateNestedManyWithoutCandidatesInput } from "./SkillSetCreateNestedManyWithoutCandidatesInput";

export type CandidateCreateInput = {
  additionalComments?: string | null;
  category: "P1" | "P2" | "P3";
  competitorCtc?: number | null;
  currentCtc?: number | null;
  currentDesignation?: string | null;
  currentFirm?: string | null;
  currentStatus:
    | "Parked"
    | "AwaitingInterview"
    | "InterviewScheduled"
    | "InterviewSelected"
    | "OfferReleased"
    | "Joined"
    | "OfferRejected"
    | "InterviewRejected"
    | "OnHold";
  email: string;
  expectedCtc?: number | null;
  externalRecruitmentPartner?: string | null;
  interviews?: InterviewCreateNestedManyWithoutCandidatesInput;
  isOnNoticePeriod: boolean;
  lastWorkingDay?: Date | null;
  name: string;
  noticePeriodTime?: number | null;
  referalEmployee?: UserWhereUniqueInput | null;
  resume?: string | null;
  skills?: SkillCreateNestedManyWithoutCandidatesInput;
  skillSets?: SkillSetCreateNestedManyWithoutCandidatesInput;
  source: "Internal" | "Referral" | "ExternalRecruitmentPartner";
  totalExperience: number;
};

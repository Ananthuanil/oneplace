import { InterviewUpdateManyWithoutCandidatesInput } from "./InterviewUpdateManyWithoutCandidatesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SkillUpdateManyWithoutCandidatesInput } from "./SkillUpdateManyWithoutCandidatesInput";
import { SkillSetUpdateManyWithoutCandidatesInput } from "./SkillSetUpdateManyWithoutCandidatesInput";

export type CandidateUpdateInput = {
  additionalComments?: string | null;
  category?: "P1" | "P2" | "P3";
  competitorCtc?: number | null;
  currentCtc?: number | null;
  currentDesignation?: string | null;
  currentFirm?: string | null;
  currentStatus?: "onHold" | "selected" | "rejected";
  email?: string;
  expectedCtc?: number | null;
  externalRecruitmentPartner?: string | null;
  interviews?: InterviewUpdateManyWithoutCandidatesInput;
  isOnNoticePeriod?: boolean;
  lastWorkingDay?: Date | null;
  name?: string;
  noticePeriodTime?: number | null;
  referalEmployee?: UserWhereUniqueInput | null;
  skills?: SkillUpdateManyWithoutCandidatesInput;
  skillSets?: SkillSetUpdateManyWithoutCandidatesInput;
  source?: "Internal" | "Referral" | "ExternalRecruitmentPartner";
  totalExperience?: number;
};

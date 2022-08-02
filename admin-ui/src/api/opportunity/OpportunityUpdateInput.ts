import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewUpdateManyWithoutOpportunitiesInput } from "./InterviewUpdateManyWithoutOpportunitiesInput";
import { SkillUpdateManyWithoutOpportunitiesInput } from "./SkillUpdateManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";

export type OpportunityUpdateInput = {
  claimedPerson?: UserWhereUniqueInput | null;
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
  interviews?: InterviewUpdateManyWithoutOpportunitiesInput;
  mappedPerson?: UserWhereUniqueInput | null;
  name?: string | null;
  optionalSkillset?: SkillUpdateManyWithoutOpportunitiesInput;
  partner?: PartnerWhereUniqueInput | null;
  requiredExperience?: number | null;
  requiredSkills?: SkillUpdateManyWithoutOpportunitiesInput;
  requirements?: string | null;
  resumeId?: string | null;
  source?: "New" | "BackFill" | null;
  winOdds?: number | null;
};

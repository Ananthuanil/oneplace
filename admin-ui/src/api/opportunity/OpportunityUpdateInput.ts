import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewUpdateManyWithoutOpportunitiesInput } from "./InterviewUpdateManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { SkillSetUpdateManyWithoutOpportunitiesInput } from "./SkillSetUpdateManyWithoutOpportunitiesInput";

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
  partner?: PartnerWhereUniqueInput | null;
  requiredExperience?: number | null;
  requiredSkillset?: SkillSetUpdateManyWithoutOpportunitiesInput;
  requirements?: string | null;
};

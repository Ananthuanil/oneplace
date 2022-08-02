import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewCreateNestedManyWithoutOpportunitiesInput } from "./InterviewCreateNestedManyWithoutOpportunitiesInput";
import { SkillCreateNestedManyWithoutOpportunitiesInput } from "./SkillCreateNestedManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";

export type OpportunityCreateInput = {
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
  interviews?: InterviewCreateNestedManyWithoutOpportunitiesInput;
  mappedPerson?: UserWhereUniqueInput | null;
  name?: string | null;
  optionalSkillset?: SkillCreateNestedManyWithoutOpportunitiesInput;
  partner?: PartnerWhereUniqueInput | null;
  requiredExperience?: number | null;
  requiredSkills?: SkillCreateNestedManyWithoutOpportunitiesInput;
  requirements?: string | null;
  source?: "New" | "BackFill" | null;
  winOdds?: number | null;
};

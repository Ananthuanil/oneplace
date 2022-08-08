import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewCreateNestedManyWithoutOpportunitiesInput } from "./InterviewCreateNestedManyWithoutOpportunitiesInput";
import { SkillCreateNestedManyWithoutOpportunitiesInput } from "./SkillCreateNestedManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

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
  procurementStatus?: "new" | "replacement" | null;
  project?: ProjectWhereUniqueInput | null;
  requiredExperience?: number | null;
  requiredSkills?: SkillCreateNestedManyWithoutOpportunitiesInput;
  requirements?: string | null;
  resumeId?: string | null;
  source?: "New" | "BackFill" | null;
  winOdds?: number | null;
};

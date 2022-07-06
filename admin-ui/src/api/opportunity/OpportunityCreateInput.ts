import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewCreateNestedManyWithoutOpportunitiesInput } from "./InterviewCreateNestedManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { SkillSetCreateNestedManyWithoutOpportunitiesInput } from "./SkillSetCreateNestedManyWithoutOpportunitiesInput";

export type OpportunityCreateInput = {
  claimedPerson?: UserWhereUniqueInput | null;
  interviews?: InterviewCreateNestedManyWithoutOpportunitiesInput;
  mappedPerson?: UserWhereUniqueInput | null;
  name?: string | null;
  partner?: PartnerWhereUniqueInput | null;
  requiredExperience?: number | null;
  requiredSkillset?: SkillSetCreateNestedManyWithoutOpportunitiesInput;
  requirements?: string | null;
  status?: "Awarded" | "Mapped" | "OngoingInterview" | "Closed" | null;
};

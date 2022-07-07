import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InterviewUpdateManyWithoutOpportunitiesInput } from "./InterviewUpdateManyWithoutOpportunitiesInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { SkillSetUpdateManyWithoutOpportunitiesInput } from "./SkillSetUpdateManyWithoutOpportunitiesInput";

export type OpportunityUpdateInput = {
  claimedPerson?: UserWhereUniqueInput | null;
  interviews?: InterviewUpdateManyWithoutOpportunitiesInput;
  mappedPerson?: UserWhereUniqueInput | null;
  name?: string | null;
  partner?: PartnerWhereUniqueInput | null;
  requiredExperience?: number | null;
  requiredSkillset?: SkillSetUpdateManyWithoutOpportunitiesInput;
  requirements?: string | null;
  status?: "Awarded" | "Mapped" | "OngoingInterview" | "Closed" | null;
};

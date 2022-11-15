import { ClientFeedbackUpdateManyWithoutProjectsInput } from "./ClientFeedbackUpdateManyWithoutProjectsInput";
import { OpportunityUpdateManyWithoutProjectsInput } from "./OpportunityUpdateManyWithoutProjectsInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectInvolvementUpdateManyWithoutProjectsInput } from "./ProjectInvolvementUpdateManyWithoutProjectsInput";
import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  clientFeedbacks?: ClientFeedbackUpdateManyWithoutProjectsInput;
  name?: string | null;
  opportunities?: OpportunityUpdateManyWithoutProjectsInput;
  partner?: PartnerWhereUniqueInput | null;
  projectInvolvements?: ProjectInvolvementUpdateManyWithoutProjectsInput;
  startDate?: Date | null;
  users?: UserUpdateManyWithoutProjectsInput;
};

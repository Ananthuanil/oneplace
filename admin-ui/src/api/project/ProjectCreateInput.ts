import { ClientFeedbackCreateNestedManyWithoutProjectsInput } from "./ClientFeedbackCreateNestedManyWithoutProjectsInput";
import { OpportunityCreateNestedManyWithoutProjectsInput } from "./OpportunityCreateNestedManyWithoutProjectsInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectInvolvementCreateNestedManyWithoutProjectsInput } from "./ProjectInvolvementCreateNestedManyWithoutProjectsInput";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  clientFeedbacks?: ClientFeedbackCreateNestedManyWithoutProjectsInput;
  name?: string | null;
  opportunities?: OpportunityCreateNestedManyWithoutProjectsInput;
  partner?: PartnerWhereUniqueInput | null;
  projectInvolvements?: ProjectInvolvementCreateNestedManyWithoutProjectsInput;
  startDate?: Date | null;
  users?: UserCreateNestedManyWithoutProjectsInput;
};

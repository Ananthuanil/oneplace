import { OpportunityCreateNestedManyWithoutProjectsInput } from "./OpportunityCreateNestedManyWithoutProjectsInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectInvolvementCreateNestedManyWithoutProjectsInput } from "./ProjectInvolvementCreateNestedManyWithoutProjectsInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  name?: string | null;
  opportunities?: OpportunityCreateNestedManyWithoutProjectsInput;
  partner?: PartnerWhereUniqueInput | null;
  projectInvolvements?: ProjectInvolvementCreateNestedManyWithoutProjectsInput;
  startDate?: Date | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  users?: UserCreateNestedManyWithoutProjectsInput;
};

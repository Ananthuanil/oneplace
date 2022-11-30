import { OpportunityUpdateManyWithoutProjectsInput } from "./OpportunityUpdateManyWithoutProjectsInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { ProjectInvolvementUpdateManyWithoutProjectsInput } from "./ProjectInvolvementUpdateManyWithoutProjectsInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  name?: string | null;
  opportunities?: OpportunityUpdateManyWithoutProjectsInput;
  partner?: PartnerWhereUniqueInput | null;
  projectInvolvements?: ProjectInvolvementUpdateManyWithoutProjectsInput;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  users?: UserUpdateManyWithoutProjectsInput;
};

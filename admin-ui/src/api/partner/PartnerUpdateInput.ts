import { OpportunityUpdateManyWithoutPartnersInput } from "./OpportunityUpdateManyWithoutPartnersInput";
import { ProjectUpdateManyWithoutPartnersInput } from "./ProjectUpdateManyWithoutPartnersInput";

export type PartnerUpdateInput = {
  description?: string | null;
  name?: string | null;
  opportunities?: OpportunityUpdateManyWithoutPartnersInput;
  projects?: ProjectUpdateManyWithoutPartnersInput;
};

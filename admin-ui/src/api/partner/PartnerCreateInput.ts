import { OpportunityCreateNestedManyWithoutPartnersInput } from "./OpportunityCreateNestedManyWithoutPartnersInput";
import { ProjectCreateNestedManyWithoutPartnersInput } from "./ProjectCreateNestedManyWithoutPartnersInput";

export type PartnerCreateInput = {
  description?: string | null;
  name?: string | null;
  opportunities?: OpportunityCreateNestedManyWithoutPartnersInput;
  projects?: ProjectCreateNestedManyWithoutPartnersInput;
};

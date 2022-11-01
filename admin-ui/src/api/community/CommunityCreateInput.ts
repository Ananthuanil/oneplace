import { CommunityActivityCreateNestedManyWithoutCommunitiesInput } from "./CommunityActivityCreateNestedManyWithoutCommunitiesInput";
import { UserCreateNestedManyWithoutCommunitiesInput } from "./UserCreateNestedManyWithoutCommunitiesInput";

export type CommunityCreateInput = {
  communityActivities?: CommunityActivityCreateNestedManyWithoutCommunitiesInput;
  communityLeads?: UserCreateNestedManyWithoutCommunitiesInput;
  description?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutCommunitiesInput;
};

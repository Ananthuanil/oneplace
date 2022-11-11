import { CommunityActivityUpdateManyWithoutCommunitiesInput } from "./CommunityActivityUpdateManyWithoutCommunitiesInput";
import { UserUpdateManyWithoutCommunitiesInput } from "./UserUpdateManyWithoutCommunitiesInput";

export type CommunityUpdateInput = {
  communityActivities?: CommunityActivityUpdateManyWithoutCommunitiesInput;
  communityLeads?: UserUpdateManyWithoutCommunitiesInput;
  description?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutCommunitiesInput;
};

import { SortOrder } from "../../util/SortOrder";

export type CommunityActivityOrderByInput = {
  communityId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type CommunityActivityFeedbackOrderByInput = {
  activityId?: SortOrder;
  activityFeedback?: SortOrder;
  attendance?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};

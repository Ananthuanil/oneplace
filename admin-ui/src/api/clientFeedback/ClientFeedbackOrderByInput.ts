import { SortOrder } from "../../util/SortOrder";

export type ClientFeedbackOrderByInput = {
  createdAt?: SortOrder;
  detailedFeedback?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  improvementNeeded?: SortOrder;
  meetingEtiquite?: SortOrder;
  processGovernance?: SortOrder;
  project?: SortOrder;
  qualityOfDeliverables?: SortOrder;
  reportingManager?: SortOrder;
  reviewerEmail?: SortOrder;
  reviewerName?: SortOrder;
  role?: SortOrder;
  status?: SortOrder;
  teamWork?: SortOrder;
  technicalExpertise?: SortOrder;
  updatedAt?: SortOrder;
};

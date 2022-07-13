import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  additionalComments?: SortOrder;
  category?: SortOrder;
  competitorCtc?: SortOrder;
  createdAt?: SortOrder;
  currentCtc?: SortOrder;
  currentDesignation?: SortOrder;
  currentFirm?: SortOrder;
  currentStatus?: SortOrder;
  email?: SortOrder;
  expectedCtc?: SortOrder;
  externalRecruitmentPartner?: SortOrder;
  id?: SortOrder;
  isOnNoticePeriod?: SortOrder;
  lastWorkingDay?: SortOrder;
  name?: SortOrder;
  noticePeriodTime?: SortOrder;
  referalEmployeeId?: SortOrder;
  source?: SortOrder;
  totalExperience?: SortOrder;
  updatedAt?: SortOrder;
};

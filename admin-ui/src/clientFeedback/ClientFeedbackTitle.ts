import { ClientFeedback as TClientFeedback } from "../api/clientFeedback/ClientFeedback";

export const CLIENTFEEDBACK_TITLE_FIELD = "reviewerName";

export const ClientFeedbackTitle = (record: TClientFeedback): string => {
  return record.reviewerName || record.id;
};

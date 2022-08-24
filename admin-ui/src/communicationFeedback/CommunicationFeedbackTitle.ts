import { CommunicationFeedback as TCommunicationFeedback } from "../api/communicationFeedback/CommunicationFeedback";

export const COMMUNICATIONFEEDBACK_TITLE_FIELD = "id";

export const CommunicationFeedbackTitle = (
  record: TCommunicationFeedback
): string => {
  return record.id || record.id;
};

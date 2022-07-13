import { CommunicationFeedback as TCommunicationFeedback } from "../api/communicationFeedback/CommunicationFeedback";

export const COMMUNICATIONFEEDBACK_TITLE_FIELD = "abilityToArticulate";

export const CommunicationFeedbackTitle = (
  record: TCommunicationFeedback
): string => {
  return record.abilityToArticulate || record.id;
};

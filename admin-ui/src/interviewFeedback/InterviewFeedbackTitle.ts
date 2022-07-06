import { InterviewFeedback as TInterviewFeedback } from "../api/interviewFeedback/InterviewFeedback";

export const INTERVIEWFEEDBACK_TITLE_FIELD = "attitudeFeedback";

export const InterviewFeedbackTitle = (record: TInterviewFeedback): string => {
  return record.attitudeFeedback || record.id;
};

import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "currentStatus";

export const InterviewTitle = (record: TInterview): string => {
  return record.currentStatus || record.id;
};

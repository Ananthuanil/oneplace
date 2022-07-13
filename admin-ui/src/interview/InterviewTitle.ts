import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "level";

export const InterviewTitle = (record: TInterview): string => {
  return record.level || record.id;
};

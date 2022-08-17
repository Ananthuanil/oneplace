import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "calendarScheduleId";

export const InterviewTitle = (record: TInterview): string => {
  return record.calendarScheduleId || record.id;
};

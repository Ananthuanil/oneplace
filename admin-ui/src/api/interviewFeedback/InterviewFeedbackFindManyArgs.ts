import { InterviewFeedbackWhereInput } from "./InterviewFeedbackWhereInput";
import { InterviewFeedbackOrderByInput } from "./InterviewFeedbackOrderByInput";

export type InterviewFeedbackFindManyArgs = {
  where?: InterviewFeedbackWhereInput;
  orderBy?: Array<InterviewFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};

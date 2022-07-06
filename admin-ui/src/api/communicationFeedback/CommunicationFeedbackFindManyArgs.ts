import { CommunicationFeedbackWhereInput } from "./CommunicationFeedbackWhereInput";
import { CommunicationFeedbackOrderByInput } from "./CommunicationFeedbackOrderByInput";

export type CommunicationFeedbackFindManyArgs = {
  where?: CommunicationFeedbackWhereInput;
  orderBy?: Array<CommunicationFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};

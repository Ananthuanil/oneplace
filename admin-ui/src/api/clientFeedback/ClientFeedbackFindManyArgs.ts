import { ClientFeedbackWhereInput } from "./ClientFeedbackWhereInput";
import { ClientFeedbackOrderByInput } from "./ClientFeedbackOrderByInput";

export type ClientFeedbackFindManyArgs = {
  where?: ClientFeedbackWhereInput;
  orderBy?: Array<ClientFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};

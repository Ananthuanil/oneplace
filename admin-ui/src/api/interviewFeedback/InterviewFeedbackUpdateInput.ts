import { CommunicationFeedbackWhereUniqueInput } from "../communicationFeedback/CommunicationFeedbackWhereUniqueInput";
import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";
import { SkillSetUpdateManyWithoutInterviewFeedbacksInput } from "./SkillSetUpdateManyWithoutInterviewFeedbacksInput";

export type InterviewFeedbackUpdateInput = {
  attitudeFeedback?: string | null;
  comments?: string | null;
  communication?: CommunicationFeedbackWhereUniqueInput | null;
  feedback?: string;
  interview?: InterviewWhereUniqueInput | null;
  logicFeedback?: string | null;
  relevantTechFeedback?: string | null;
  skillSets?: SkillSetUpdateManyWithoutInterviewFeedbacksInput;
  status?: "Passed" | "NotPassed" | "Hold" | null;
};

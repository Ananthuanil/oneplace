import { CommunicationFeedbackWhereUniqueInput } from "../communicationFeedback/CommunicationFeedbackWhereUniqueInput";
import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";
import { SkillLevelUpdateManyWithoutInterviewFeedbacksInput } from "./SkillLevelUpdateManyWithoutInterviewFeedbacksInput";
import { SkillSetUpdateManyWithoutInterviewFeedbacksInput } from "./SkillSetUpdateManyWithoutInterviewFeedbacksInput";

export type InterviewFeedbackUpdateInput = {
  attitudeFeedback?: string | null;
  comments?: string | null;
  communication?: CommunicationFeedbackWhereUniqueInput | null;
  feedback?: string;
  interview?: InterviewWhereUniqueInput | null;
  logicFeedback?: string | null;
  relevantTechFeedback?: string | null;
  skillMatrices?: SkillLevelUpdateManyWithoutInterviewFeedbacksInput;
  skillSets?: SkillSetUpdateManyWithoutInterviewFeedbacksInput;
  status?: "Passed" | "NotPassed" | "Hold" | null;
};

import { CommunicationFeedbackWhereUniqueInput } from "../communicationFeedback/CommunicationFeedbackWhereUniqueInput";
import { InterviewWhereUniqueInput } from "../interview/InterviewWhereUniqueInput";
import { SkillLevelCreateNestedManyWithoutInterviewFeedbacksInput } from "./SkillLevelCreateNestedManyWithoutInterviewFeedbacksInput";
import { SkillSetCreateNestedManyWithoutInterviewFeedbacksInput } from "./SkillSetCreateNestedManyWithoutInterviewFeedbacksInput";

export type InterviewFeedbackCreateInput = {
  attitudeFeedback?: string | null;
  comments?: string | null;
  communication?: CommunicationFeedbackWhereUniqueInput | null;
  feedback: string;
  interview?: InterviewWhereUniqueInput | null;
  logicFeedback?: string | null;
  relevantTechFeedback?: string | null;
  skillMatrices?: SkillLevelCreateNestedManyWithoutInterviewFeedbacksInput;
  skillSets?: SkillSetCreateNestedManyWithoutInterviewFeedbacksInput;
  status?: "Passed" | "NotPassed" | "Hold" | null;
};

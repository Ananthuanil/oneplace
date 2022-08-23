import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";

export type CommunicationFeedbackWhereInput = {
  abilityToArticulate?: StringNullableFilter;
  candidates?: CandidateWhereUniqueInput;
  confidenceLevel?: StringNullableFilter;
  englishSpeakingSkills?: StringNullableFilter;
  id?: StringFilter;
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput;
};

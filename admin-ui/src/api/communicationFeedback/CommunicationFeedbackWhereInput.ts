import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewFeedbackWhereUniqueInput } from "../interviewFeedback/InterviewFeedbackWhereUniqueInput";

export type CommunicationFeedbackWhereInput = {
  abilityToArticulate?: StringNullableFilter;
  confidenceLevel?: StringNullableFilter;
  englishSpeakingSkills?: StringNullableFilter;
  id?: StringFilter;
  interviewFeedbacks?: InterviewFeedbackWhereUniqueInput;
};

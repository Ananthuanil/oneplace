import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewFeedbackListRelationFilter } from "../interviewFeedback/InterviewFeedbackListRelationFilter";

export type CommunicationFeedbackWhereInput = {
  abilityToArticulate?: StringNullableFilter;
  confidenceLevel?: StringNullableFilter;
  englishSpeakingSkills?: StringNullableFilter;
  id?: StringFilter;
  interviewFeedbacks?: InterviewFeedbackListRelationFilter;
};

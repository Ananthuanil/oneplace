import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMUNICATIONFEEDBACK_TITLE_FIELD } from "./CommunicationFeedbackTitle";
import { INTERVIEW_TITLE_FIELD } from "../interview/InterviewTitle";

export const CommunicationFeedbackShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ability_to_articulate" source="abilityToArticulate" />
        <TextField label="confidence_level" source="confidenceLevel" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="english_speaking_skills"
          source="englishSpeakingSkills"
        />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InterviewFeedback"
          target="CommunicationFeedbackId"
          label="Interview Feedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="attitude_feedback" source="attitudeFeedback" />
            <TextField label="Comments" source="comments" />
            <ReferenceField
              label="communication"
              source="communicationfeedback.id"
              reference="CommunicationFeedback"
            >
              <TextField source={COMMUNICATIONFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Interview"
              source="interview.id"
              reference="Interview"
            >
              <TextField source={INTERVIEW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="logic_feedback" source="logicFeedback" />
            <TextField
              label="relevant_tech_feedback"
              source="relevantTechFeedback"
            />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

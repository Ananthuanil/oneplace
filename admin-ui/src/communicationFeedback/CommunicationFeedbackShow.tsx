import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INTERVIEWFEEDBACK_TITLE_FIELD } from "../interviewFeedback/InterviewFeedbackTitle";

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
        <ReferenceField
          label="Interview Feedbacks"
          source="interviewfeedback.id"
          reference="InterviewFeedback"
        >
          <TextField source={INTERVIEWFEEDBACK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

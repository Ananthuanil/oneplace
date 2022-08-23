import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { INTERVIEWFEEDBACK_TITLE_FIELD } from "../interviewFeedback/InterviewFeedbackTitle";

export const CommunicationFeedbackShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ability_to_articulate" source="abilityToArticulate" />
        <ReferenceField
          label="Candidates"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
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

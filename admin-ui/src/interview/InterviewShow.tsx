import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMMUNICATIONFEEDBACK_TITLE_FIELD } from "../communicationFeedback/CommunicationFeedbackTitle";
import { INTERVIEW_TITLE_FIELD } from "./InterviewTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";

export const InterviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="closed" source="closed" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Interviewer" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Level" source="level" />
        <TextField label="Mode" source="mode" />
        <ReferenceField
          label="Opportunity"
          source="opportunity.id"
          reference="Opportunity"
        >
          <TextField source={OPPORTUNITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InterviewFeedback"
          target="InterviewId"
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

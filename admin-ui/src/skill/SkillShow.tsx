import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { INTERVIEWFEEDBACK_TITLE_FIELD } from "../interviewFeedback/InterviewFeedbackTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { SKILL_TITLE_FIELD } from "./SkillTitle";

export const SkillShow = (props: ShowProps): React.ReactElement => {
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Opportunity"
          source="opportunity.id"
          reference="Opportunity"
        >
          <TextField source={OPPORTUNITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SkillSet"
          target="SkillId"
          label="Skill Set"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expertise Level" source="expertiseLevel" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Interview Feedback"
              source="interviewfeedback.id"
              reference="InterviewFeedback"
            >
              <TextField source={INTERVIEWFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Opportunity"
              source="opportunity.id"
              reference="Opportunity"
            >
              <TextField source={OPPORTUNITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Skill" source="skill.id" reference="Skill">
              <TextField source={SKILL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

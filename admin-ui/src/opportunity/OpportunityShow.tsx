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
  BooleanField,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { OPPORTUNITY_TITLE_FIELD } from "./OpportunityTitle";
import { INTERVIEWFEEDBACK_TITLE_FIELD } from "../interviewFeedback/InterviewFeedbackTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";

export const OpportunityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Claimed Person"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Current Status" source="currentStatus" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Mapped Person" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <ReferenceField label="Partner" source="partner.id" reference="Partner">
          <TextField source={PARTNER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Required Experience" source="requiredExperience" />
        <TextField label="Requirements" source="requirements" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Interview"
          target="OpportunityId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="closed" source="closed" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Current Status" source="currentStatus" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Interviewer"
              source="user.id"
              reference="User"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SkillSet"
          target="OpportunityId"
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

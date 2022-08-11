import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INTERVIEWFEEDBACK_TITLE_FIELD } from "./InterviewFeedbackTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { COMMUNICATIONFEEDBACK_TITLE_FIELD } from "../communicationFeedback/CommunicationFeedbackTitle";
import { INTERVIEW_TITLE_FIELD } from "../interview/InterviewTitle";

export const InterviewFeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="SkillLevel"
          target="InterviewFeedbackId"
          label="skillMatrices"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InterviewFeedback"
              source="interviewfeedback.id"
              reference="InterviewFeedback"
            >
              <TextField source={INTERVIEWFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="level" source="level" />
            <ReferenceField label="skill" source="skill.id" reference="Skill">
              <TextField source={SKILL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SkillSet"
          target="InterviewFeedbackId"
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

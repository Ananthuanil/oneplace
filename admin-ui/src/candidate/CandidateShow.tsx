import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "./CandidateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { INTERVIEWFEEDBACK_TITLE_FIELD } from "../interviewFeedback/InterviewFeedbackTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional Comments" source="additionalComments" />
        <TextField label="category" source="category" />
        <TextField label="competitor_ctc" source="competitorCtc" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="current_ctc" source="currentCtc" />
        <TextField label="Current Designation" source="currentDesignation" />
        <TextField label="Current Firm" source="currentFirm" />
        <TextField label="Current Status" source="currentStatus" />
        <TextField label="Email" source="email" />
        <TextField label="expected_ctc" source="expectedCtc" />
        <TextField
          label="external_recruitment_partner"
          source="externalRecruitmentPartner"
        />
        <TextField label="ID" source="id" />
        <BooleanField label="Is On Notice Period" source="isOnNoticePeriod" />
        <TextField label="Last Working Day" source="lastWorkingDay" />
        <TextField label="Name" source="name" />
        <TextField label="Notice Period Time" source="noticePeriodTime" />
        <ReferenceField
          label="referal_employee"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Resume" source="resume" />
        <TextField label="source" source="source" />
        <TextField label="Total Experience" source="totalExperience" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Interview"
          target="CandidateId"
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
          reference="Skill"
          target="CandidateId"
          label="Skills"
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
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SkillSet"
          target="CandidateId"
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

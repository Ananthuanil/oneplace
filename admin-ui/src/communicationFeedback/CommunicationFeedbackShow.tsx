import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { COMMUNICATIONFEEDBACK_TITLE_FIELD } from "./CommunicationFeedbackTitle";
import { RECRUITMENTPARTNER_TITLE_FIELD } from "../recruitmentPartner/RecruitmentPartnerTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
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
        <ReferenceManyField
          reference="Candidate"
          target="CommunicationFeedbackId"
          label="Candidates"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Additional Comments"
              source="additionalComments"
            />
            <TextField label="category" source="category" />
            <ReferenceField
              label="Communication Feedback"
              source="communicationfeedback.id"
              reference="CommunicationFeedback"
            >
              <TextField source={COMMUNICATIONFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="competitor_ctc" source="competitorCtc" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="current_ctc" source="currentCtc" />
            <TextField
              label="Current Designation"
              source="currentDesignation"
            />
            <TextField label="Current Firm" source="currentFirm" />
            <TextField label="Current Status" source="currentStatus" />
            <TextField label="Email" source="email" />
            <TextField label="expected_ctc" source="expectedCtc" />
            <ReferenceField
              label="external_recruitment_partner"
              source="recruitmentpartner.id"
              reference="RecruitmentPartner"
            >
              <TextField source={RECRUITMENTPARTNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField
              label="Is On Notice Period"
              source="isOnNoticePeriod"
            />
            <TextField label="Last Working Day" source="lastWorkingDay" />
            <TextField label="Name" source="name" />
            <TextField label="Notice Period Time" source="noticePeriodTime" />
            <ReferenceField
              label="opportunity"
              source="opportunity.id"
              reference="Opportunity"
            >
              <TextField source={OPPORTUNITY_TITLE_FIELD} />
            </ReferenceField>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

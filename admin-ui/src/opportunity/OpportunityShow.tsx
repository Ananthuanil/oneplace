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

import { COMMUNICATIONFEEDBACK_TITLE_FIELD } from "../communicationFeedback/CommunicationFeedbackTitle";
import { RECRUITMENTPARTNER_TITLE_FIELD } from "../recruitmentPartner/RecruitmentPartnerTitle";
import { OPPORTUNITY_TITLE_FIELD } from "./OpportunityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

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
        <ReferenceField
          label="mappedCandidates"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="mappedEmployee"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <ReferenceField label="Partner" source="partner.id" reference="Partner">
          <TextField source={PARTNER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Procurement Status" source="procurementStatus" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Required Experience" source="requiredExperience" />
        <TextField label="Requirements" source="requirements" />
        <TextField label="Resume ID" source="resumeId" />
        <TextField label="Source" source="source" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Win Odds" source="winOdds" />
        <ReferenceManyField
          reference="Candidate"
          target="OpportunityId"
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
        <ReferenceManyField
          reference="Skill"
          target="OpportunityId"
          label="Skills"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="OppurtunatyRequiredSkills"
              source="opportunity.id"
              reference="Opportunity"
            >
              <TextField source={OPPORTUNITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Skill"
          target="OpportunityId"
          label="Skills"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="OppurtunatyRequiredSkills"
              source="opportunity.id"
              reference="Opportunity"
            >
              <TextField source={OPPORTUNITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

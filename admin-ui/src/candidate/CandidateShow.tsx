import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CANDIDATE_TITLE_FIELD } from "./CandidateTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { INTERVIEWFEEDBACK_TITLE_FIELD } from "../interviewFeedback/InterviewFeedbackTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";
import { COMMUNICATIONFEEDBACK_TITLE_FIELD } from "../communicationFeedback/CommunicationFeedbackTitle";
import { RECRUITMENTPARTNER_TITLE_FIELD } from "../recruitmentPartner/RecruitmentPartnerTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional Comments" source="additionalComments" />
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
        <TextField label="Current Designation" source="currentDesignation" />
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
        <BooleanField label="Is On Notice Period" source="isOnNoticePeriod" />
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
        <ReferenceManyField
          reference="Opportunity"
          target="CandidateId"
          label="Opportunities"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Partner"
              source="partner.id"
              reference="Partner"
            >
              <TextField source={PARTNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Procurement Status" source="procurementStatus" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Required Experience"
              source="requiredExperience"
            />
            <TextField label="Requirements" source="requirements" />
            <TextField label="Resume ID" source="resumeId" />
            <TextField label="Source" source="source" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Win Odds" source="winOdds" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Interview"
          target="CandidateId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Calendar Schedule Id"
              source="calendarScheduleId"
            />
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
            <BooleanField label="Email Status" source="emailStatus" />
            <TextField label="End Date" source="endDate" />
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
            <TextField label="Start Date" source="startDate" />
            <TextField label="subject" source="subject" />
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

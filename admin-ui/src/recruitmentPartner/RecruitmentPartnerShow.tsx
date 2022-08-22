import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { RECRUITMENTPARTNER_TITLE_FIELD } from "./RecruitmentPartnerTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RecruitmentPartnerShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Candidate"
          target="RecruitmentPartnerId"
          label="Candidates"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Additional Comments"
              source="additionalComments"
            />
            <TextField label="category" source="category" />
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

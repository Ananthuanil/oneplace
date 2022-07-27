import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CandidateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Candidates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

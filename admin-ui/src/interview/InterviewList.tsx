import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BooleanField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";

export const InterviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Interviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Calendar Schedule Id" source="calendarScheduleId" />
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
        <TextField label="End Date" source="endDate" />
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
        <TextField label="Start Date" source="startDate" />
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

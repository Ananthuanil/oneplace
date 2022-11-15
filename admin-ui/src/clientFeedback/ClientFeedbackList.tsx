import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const ClientFeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"client_feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="DetailedFeedback" source="detailedFeedback" />
        <ReferenceField label="Employee" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="ImprovementNeeded" source="improvementNeeded" />
        <TextField label="MeetingEtiquite" source="meetingEtiquite" />
        <TextField label=" ProcessGovernance" source="processGovernance" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="QualityOfDeliverables"
          source="qualityOfDeliverables"
        />
        <TextField label="ReportingManager" source="reportingManager" />
        <TextField label="ReviewerEmail" source="reviewerEmail" />
        <TextField label="ReviewerName" source="reviewerName" />
        <TextField label="Role" source="role" />
        <TextField label="status" source="status" />
        <TextField label="TeamWork " source="teamWork" />
        <TextField label="TechnicalExpertise" source="technicalExpertise" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

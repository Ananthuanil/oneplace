import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ClientFeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DetailedFeedback" source="detailedFeedback" />
        <ReferenceField label="Employee" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="ImprovementNeeded" source="improvementNeeded" />
        <TextField label="MeetingEtiquite" source="meetingEtiquite" />
        <ReferenceField label="organiser" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label=" ProcessGovernance" source="processGovernance" />
        <TextField label="Project" source="project" />
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
      </SimpleShowLayout>
    </Show>
  );
};

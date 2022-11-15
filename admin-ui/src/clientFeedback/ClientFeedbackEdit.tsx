import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const ClientFeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="DetailedFeedback"
          multiline
          source="detailedFeedback"
        />
        <ReferenceInput source="user.id" reference="User" label="Employee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput
          label="ImprovementNeeded"
          multiline
          source="improvementNeeded"
        />
        <NumberInput
          step={1}
          label="MeetingEtiquite"
          source="meetingEtiquite"
        />
        <NumberInput
          step={1}
          label=" ProcessGovernance"
          source="processGovernance"
        />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="QualityOfDeliverables"
          source="qualityOfDeliverables"
        />
        <TextInput label="ReportingManager" source="reportingManager" />
        <TextInput label="ReviewerEmail" source="reviewerEmail" type="email" />
        <TextInput label="ReviewerName" source="reviewerName" />
        <TextInput label="Role" source="role" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "linkGenerated", value: "LinkGenerated" },
            { label: "waitingForFeedback", value: "WaitingForFeedback" },
            { label: "feedbackReceived", value: "FeedbackReceived" },
            { label: "noResponse", value: "NoResponse" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="TeamWork " source="teamWork" />
        <NumberInput
          step={1}
          label="TechnicalExpertise"
          source="technicalExpertise"
        />
      </SimpleForm>
    </Edit>
  );
};

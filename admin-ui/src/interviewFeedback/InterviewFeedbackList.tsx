import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMUNICATIONFEEDBACK_TITLE_FIELD } from "../communicationFeedback/CommunicationFeedbackTitle";
import { INTERVIEW_TITLE_FIELD } from "../interview/InterviewTitle";

export const InterviewFeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Interview Feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="attitude_feedback" source="attitudeFeedback" />
        <TextField label="Comments" source="comments" />
        <ReferenceField
          label="communication"
          source="communicationfeedback.id"
          reference="CommunicationFeedback"
        >
          <TextField source={COMMUNICATIONFEEDBACK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Feedback" source="feedback" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Interview"
          source="interview.id"
          reference="Interview"
        >
          <TextField source={INTERVIEW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="logic_feedback" source="logicFeedback" />
        <TextField
          label="relevant_tech_feedback"
          source="relevantTechFeedback"
        />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

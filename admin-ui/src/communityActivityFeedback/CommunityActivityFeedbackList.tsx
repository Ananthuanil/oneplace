import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { COMMUNITYACTIVITY_TITLE_FIELD } from "../communityActivity/CommunityActivityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommunityActivityFeedbackList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"community_activity_feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="activity"
          source="communityactivity.id"
          reference="CommunityActivity"
        >
          <TextField source={COMMUNITYACTIVITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="activity_feedback" source="activityFeedback" />
        <BooleanField label="attendance" source="attendance" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="employee" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

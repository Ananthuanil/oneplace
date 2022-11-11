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

import { COMMUNITYACTIVITY_TITLE_FIELD } from "./CommunityActivityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";

export const CommunityActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="community"
          source="community.id"
          reference="Community"
        >
          <TextField source={COMMUNITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CommunityActivityFeedback"
          target="CommunityActivityId"
          label="community_activity_feedbacks"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

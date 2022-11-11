import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

import { COMMUNITYACTIVITY_TITLE_FIELD } from "../communityActivity/CommunityActivityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommunityActivityFeedbackShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

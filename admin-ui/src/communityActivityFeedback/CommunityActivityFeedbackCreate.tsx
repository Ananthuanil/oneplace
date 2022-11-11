import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { CommunityActivityTitle } from "../communityActivity/CommunityActivityTitle";
import { UserTitle } from "../user/UserTitle";

export const CommunityActivityFeedbackCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="communityactivity.id"
          reference="CommunityActivity"
          label="activity"
        >
          <SelectInput optionText={CommunityActivityTitle} />
        </ReferenceInput>
        <TextInput
          label="activity_feedback"
          multiline
          source="activityFeedback"
        />
        <BooleanInput label="attendance" source="attendance" />
        <ReferenceInput source="user.id" reference="User" label="employee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput label="rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};

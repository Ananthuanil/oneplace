import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CommunityTitle } from "../community/CommunityTitle";
import { CommunityActivityFeedbackTitle } from "../communityActivityFeedback/CommunityActivityFeedbackTitle";

export const CommunityActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="community.id"
          reference="Community"
          label="community"
        >
          <SelectInput optionText={CommunityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="communityActivityFeedbacks"
          reference="CommunityActivityFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommunityActivityFeedbackTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

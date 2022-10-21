import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const EmployeeFeedbackCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="area " source="area" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="user.id" reference="User" label="employee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="nature"
          label="nature "
          choices={[
            { label: "Positive ", value: "Positive" },
            { label: "Negative", value: "Negative" },
            { label: "Neutral", value: "Neutral" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="remark " multiline source="remark" />
        <ReferenceInput source="user.id" reference="User" label="reviewer">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="test" source="test" />
      </SimpleForm>
    </Create>
  );
};

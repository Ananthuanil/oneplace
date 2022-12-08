import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TaskTitle } from "../task/TaskTitle";

export const AttendanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="employee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="loginTime" source="loginTime" />
        <TextInput label="logoutTime" source="logoutTime" />
        <SelectInput
          source="office"
          label="office"
          choices={[
            { label: "Mg Road", value: "mgRoad" },
            { label: "Infopark", value: "infopark" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="tasks"
          reference="Task"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTitle} />
        </ReferenceArrayInput>
        <TextInput label="temp" source="temp" />
        <SelectInput
          source="workMode"
          label="work mode"
          choices={[
            { label: "Work From Office", value: "WFO" },
            { label: "Work From Home", value: "WFH" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

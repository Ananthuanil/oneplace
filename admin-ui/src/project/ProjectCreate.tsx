import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { PartnerTitle } from "../partner/PartnerTitle";
import { ProjectInvolvementTitle } from "../projectInvolvement/ProjectInvolvementTitle";
import { UserTitle } from "../user/UserTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="partner.id" reference="Partner" label="Partner">
          <SelectInput optionText={PartnerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="projectInvolvements"
          reference="ProjectInvolvement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectInvolvementTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

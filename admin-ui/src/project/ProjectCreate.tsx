import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OpportunityTitle } from "../opportunity/OpportunityTitle";
import { PartnerTitle } from "../partner/PartnerTitle";
import { ProjectInvolvementTitle } from "../projectInvolvement/ProjectInvolvementTitle";
import { UserTitle } from "../user/UserTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="opportunities"
          reference="Opportunity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OpportunityTitle} />
        </ReferenceArrayInput>
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

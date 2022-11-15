import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PARTNER_TITLE_FIELD } from "../partner/PartnerTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const OpportunityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Opportunities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Claimed Person"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Current Status" source="currentStatus" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="Partner" source="partner.id" reference="Partner">
          <TextField source={PARTNER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Procurement Status" source="procurementStatus" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Required Experience" source="requiredExperience" />
        <TextField label="Requirements" source="requirements" />
        <TextField label="Resume ID" source="resumeId" />
        <TextField label="Source" source="source" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Win Odds" source="winOdds" />
      </Datagrid>
    </List>
  );
};

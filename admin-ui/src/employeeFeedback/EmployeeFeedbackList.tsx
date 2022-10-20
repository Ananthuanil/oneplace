import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EmployeeFeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmployeeFeedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="area " source="area" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <ReferenceField label="employee" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="nature " source="nature" />
        <TextField label="remark " source="remark" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

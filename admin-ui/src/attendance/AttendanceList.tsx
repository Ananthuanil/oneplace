import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AttendanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"attendances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="employee" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="loginTime" source="loginTime" />
        <TextField label="logoutTime" source="logoutTime" />
        <TextField label="office" source="office" />
        <TextField label="temp" source="temp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="work mode" source="workMode" />
      </Datagrid>
    </List>
  );
};

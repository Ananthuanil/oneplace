import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

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
        <TextField label="ID" source="id" />
        <TextField label="loginTime" source="loginTime" />
        <TextField label="logoutTime" source="logoutTime" />
        <TextField label="office" source="office" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="work mode" source="workMode" />
      </Datagrid>
    </List>
  );
};

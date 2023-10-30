import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LoginDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ip" source="ip" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};

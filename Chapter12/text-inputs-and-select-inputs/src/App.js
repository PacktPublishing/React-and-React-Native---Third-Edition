import "typeface-roboto";
import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";

export default function App() {
  return (
    <FormGroup style={{ width: 200, margin: 10 }}>
      <MyTextInput />
      <MySelect />
    </FormGroup>
  );
}

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function MyTextInput() {
  const [value, setValue] = useState("");

  return (
    <TextField
      label="Name"
      value={value}
      onChange={e => setValue(e.target.value)}
      margin="normal"
    />
  );
}

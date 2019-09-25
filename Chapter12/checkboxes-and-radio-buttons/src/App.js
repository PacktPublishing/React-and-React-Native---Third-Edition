import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Checkboxes() {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("First");

  return (
    <div>
      <FormControlLabel
        label={`Checkbox ${checkbox ? "(checked)" : ""}`}
        control={
          <Checkbox
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
        }
      />
      <FormControl component="fieldset">
        <FormLabel component="legend">{radio}</FormLabel>
        <RadioGroup value={radio} onChange={e => setRadio(e.target.value)}>
          <FormControlLabel value="First" label="First" control={<Radio />} />
          <FormControlLabel value="Second" label="Second" control={<Radio />} />
          <FormControlLabel value="Third" label="Third" control={<Radio />} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

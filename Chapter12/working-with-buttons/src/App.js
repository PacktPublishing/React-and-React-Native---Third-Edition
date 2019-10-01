import "typeface-roboto";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AndroidIcon from "@material-ui/icons/Android";

const buttonStyle = { margin: 10 };

function toggleColor(setter, value) {
  setter(value === "default" ? "primary" : "default");
}

export default function App() {
  const [contained, setContained] = useState("default");
  const [text, setText] = useState("default");
  const [outlined, setOutlined] = useState("default");
  const [icon, setIcon] = useState("default");

  return (
    <Grid container>
      <Grid
        item
        component={Button}
        variant="contained"
        style={buttonStyle}
        color={contained}
        onClick={() => toggleColor(setContained, contained)}
      >
        Contained
      </Grid>
      <Grid
        item
        component={Button}
        style={buttonStyle}
        color={text}
        onClick={() => toggleColor(setText, text)}
      >
        Text
      </Grid>
      <Grid
        item
        component={Button}
        variant="outlined"
        style={buttonStyle}
        color={outlined}
        onClick={() => toggleColor(setOutlined, outlined)}
      >
        Outlined
      </Grid>
      <Grid
        item
        component={IconButton}
        style={buttonStyle}
        color={icon}
        onClick={() => toggleColor(setIcon, icon)}
      >
        <AndroidIcon />
      </Grid>
    </Grid>
  );
}

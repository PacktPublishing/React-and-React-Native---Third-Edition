import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function App() {
  const textStyle = {
    backgroundColor: "#cfe8fc",
    margin: 5,
    textAlign: "center"
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography style={textStyle}>sm</Typography>
      </Container>
      <Container maxWidth="md">
        <Typography style={textStyle}>md</Typography>
      </Container>
      <Container maxWidth="lg">
        <Typography style={textStyle}>lg</Typography>
      </Container>
    </Fragment>
  );
}

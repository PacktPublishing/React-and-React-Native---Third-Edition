import "typeface-roboto";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useButtonStyles = makeStyles(theme => ({
  root: { margin: theme.spacing(1) },
  contained: { borderRadius: theme.shape.borderRadius + 2 },
  sizeSmall: { fontWeight: theme.typography.fontWeightLight }
}));

export default function App() {
  const buttonClasses = useButtonStyles();

  return (
    <Fragment>
      <Button classes={buttonClasses}>First</Button>
      <Button classes={buttonClasses} variant="contained">
        Second
      </Button>
      <Button classes={buttonClasses} size="small" variant="outlined">
        Third
      </Button>
    </Fragment>
  );
}

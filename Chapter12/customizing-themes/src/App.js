import "typeface-roboto";
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const theme = createMuiTheme({
  typography: {
    fontSize: 11
  },
  overrides: {
    MuiMenuItem: {
      root: {
        marginLeft: 15,
        marginRight: 15
      }
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu anchorEl={document} open={true}>
        <MenuItem>First Item</MenuItem>
        <MenuItem>Second Item</MenuItem>
        <MenuItem>Third Item</MenuItem>
      </Menu>
    </ThemeProvider>
  );
}

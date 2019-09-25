import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const tabContentStyle = {
  padding: 16
};

function TabContainer({ value }) {
  return (
    <AppBar position="static">
      <Tabs value={value}>
        <Tab label="Item One" component={Link} to="/" />
        <Tab label="Item Two" component={Link} to="/page2" />
        <Tab label="Item Three" component={Link} to="/page3" />
      </Tabs>
    </AppBar>
  );
}

export default function App() {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <Fragment>
            <TabContainer value={0} />
            <Typography component="div" style={tabContentStyle}>
              Item One
            </Typography>
          </Fragment>
        )}
      />
      <Route
        exact
        path="/page2"
        render={() => (
          <Fragment>
            <TabContainer value={1} />
            <Typography component="div" style={tabContentStyle}>
              Item Two
            </Typography>
          </Fragment>
        )}
      />
      <Route
        exact
        path="/page3"
        render={() => (
          <Fragment>
            <TabContainer value={2} />
            <Typography component="div" style={tabContentStyle}>
              Item Three
            </Typography>
          </Fragment>
        )}
      />
    </Router>
  );
}

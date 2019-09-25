import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

export default function App({ links }) {
  const [open, setOpen] = useState(false);

  function toggleDrawer({ type, key }) {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }

    setOpen(!open);
  }

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {links.map(link => (
              <ListItem button key={link.url} component={Link} to={link.url}>
                <Switch>
                  <Route
                    exact
                    path={link.url}
                    render={() => (
                      <ListItemText
                        primary={link.name}
                        primaryTypographyProps={{ color: "primary" }}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    render={() => <ListItemText primary={link.name} />}
                  />
                </Switch>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}

App.defaultProps = {
  links: [
    { url: "/first", name: "First Page" },
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" }
  ]
};

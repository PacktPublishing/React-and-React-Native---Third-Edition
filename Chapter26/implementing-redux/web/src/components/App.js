import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Article from "./Article";

function articleList(filter) {
  return props => <Home {...props} filter={filter} />;
}

const categoryListStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex"
};

const categoryItemStyle = {
  padding: "5px"
};

const Local = articleList("local");
const Global = articleList("global");
const Tech = articleList("tech");
const Sports = articleList("sports");

export default connect(state => state.App)(({ title, links }) => (
  <Router>
    <main>
      <h1>{title}</h1>
      <ul style={categoryListStyle}>
        {/* Renders a link for each article category.
             The key thing to note is that the "links"
             value comes from a Redux store. */}
        {links.map(l => (
          <li key={l.url} style={categoryItemStyle}>
            <NavLink exact to={l.url} activeStyle={{ fontWeight: "bold" }}>
              {l.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <section>
        <Route exact path="/" component={Home} />
        <Route exact path="/local" component={Local} />
        <Route exact path="/global" component={Global} />
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/articles/:id" component={Article} />
      </section>
    </main>
  </Router>
));

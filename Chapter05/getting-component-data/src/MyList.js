import React, { Component } from "react";

export default class MyList extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    const { name } = this.props.items.find(i => i.id === id);
    console.log("clicked", `"${name}"`);
  }

  render() {
    return (
      <ul>
        {this.props.items.map(({ id, name }) => (
          <li key={id} onClick={this.onClick.bind(null, id)}>
            {name}
          </li>
        ))}
      </ul>
    );
  }
}

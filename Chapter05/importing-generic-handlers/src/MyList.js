import React, { Component } from "react";
import reverse from "./reverse";

export default class MyList extends Component {
  state = {
    items: ["Angular", "Ember", "React"]
  };

  onReverseClick = reverse.bind(this);

  render() {
    const {
      state: { items },
      onReverseClick
    } = this;

    return (
      <section>
        <button onClick={onReverseClick}>Reverse</button>
        <ul>
          {items.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </section>
    );
  }
}

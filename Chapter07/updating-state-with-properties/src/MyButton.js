import React from "react";

export default ({ clicks, disabled, text, onClick }) => (
  <section>
    <p>{clicks} clicks</p>
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  </section>
);

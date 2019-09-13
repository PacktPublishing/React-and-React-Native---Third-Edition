import React from "react";
import PropTypes from "prop-types";

export default function MyComponent({ myHeader, myContent }) {
  return (
    <section>
      <header>{myHeader}</header>
      <main>{myContent}</main>
    </section>
  );
}

MyComponent.propTypes = {
  myHeader: PropTypes.element.isRequired,
  myContent: PropTypes.node.isRequired
};

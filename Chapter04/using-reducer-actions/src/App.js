import React, { Fragment, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
}

export default function App() {
  const [{ name, age }, dispatch] = useReducer(reducer, {});

  return (
    <Fragment>
      <input
        placeholder="Name"
        value={name}
        onChange={e => dispatch({ type: "changeName", value: e.target.value })}
      />
      <p>Name: {name}</p>
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={e => dispatch({ type: "changeAge", value: e.target.value })}
      />
      <p>Age: {age}</p>
    </Fragment>
  );
}

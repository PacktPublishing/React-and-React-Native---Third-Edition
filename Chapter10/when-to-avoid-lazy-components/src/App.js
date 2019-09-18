import React, { Fragment, Suspense, lazy, useState } from "react";

const First = lazy(() => import("./First"));
const Second = lazy(() => import("./Second"));

function ShowComponent({ name }) {
  switch (name) {
    case "first":
      return <First />;
    case "second":
      return <Second />;
    default:
      return null;
  }
}

export default function App() {
  const [component, setComponent] = useState("");

  return (
    <Fragment>
      <label>
        Load Component:{" "}
        <select value={component} onChange={e => setComponent(e.target.value)}>
          <option value="">None</option>
          <option value="first">First</option>
          <option value="second">Second</option>
        </select>
      </label>
      <Suspense fallback="loading...">
        <ShowComponent name={component} />
      </Suspense>
    </Fragment>
  );
}

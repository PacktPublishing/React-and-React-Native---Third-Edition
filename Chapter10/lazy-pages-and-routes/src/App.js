import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const First = lazy(() =>
  Promise.all([
    import("./First"),
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  ]).then(([m]) => m)
);

const Second = lazy(() =>
  Promise.all([
    import("./Second"),
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  ]).then(([m]) => m)
);

export default function App() {
  return (
    <Router>
      <section>
        <nav>
          <p>
            <Link to="first">First</Link>
          </p>
          <p>
            <Link to="second">Second</Link>
          </p>
        </nav>
        <section>
          <Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
            <Route path="/first" component={First} />
            <Route path="/second" component={Second} />
          </Suspense>
        </section>
      </section>
    </Router>
  );
}

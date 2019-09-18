import React, { Fragment, lazy } from "react";

const MyFeature = lazy(() =>
  Promise.all([
    import("./MyFeature"),
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  ]).then(([m]) => m)
);

export default function MyPage() {
  return (
    <Fragment>
      <h1>My Page</h1>
      <MyFeature />
    </Fragment>
  );
}

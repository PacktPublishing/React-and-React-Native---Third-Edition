import React, { Fragment, lazy } from "react";

const MyFeature = lazy(() => import("./MyFeature"));

export default function MyPage() {
  return (
    <Fragment>
      <h1>My Page</h1>
      <MyFeature />
    </Fragment>
  );
}

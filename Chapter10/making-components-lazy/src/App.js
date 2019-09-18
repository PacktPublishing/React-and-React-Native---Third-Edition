import React, { Suspense, lazy } from "react";

const MyComponent = lazy(() => import("./MyComponent"));

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <MyComponent />
    </Suspense>
  );
}

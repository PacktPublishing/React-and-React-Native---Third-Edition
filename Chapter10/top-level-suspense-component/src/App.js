import React, { Suspense } from "react";
import MyPage from "./MyPage";

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <MyPage />
    </Suspense>
  );
}

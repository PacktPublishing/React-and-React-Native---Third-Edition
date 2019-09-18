import React, { Suspense } from "react";
import { FadeLoader } from "react-spinners";
import MyPage from "./MyPage";

export default function App() {
  return (
    <Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
      <MyPage />
    </Suspense>
  );
}

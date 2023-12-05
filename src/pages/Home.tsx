import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>React Home</title>
				<meta name="description" content="메인 페이지의 디스크립션입니다." />
      </Helmet>
      <div className="Home grow">
        <h1>Home</h1>
      </div>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>React About</title>
				<meta name="description" content="어바웃 페이지의 디스크립션입니다." />
      </Helmet>
      <div className="About grow">
        <h2>About</h2>
      </div>
    </>
  );
}
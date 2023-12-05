import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>React Contact</title>
        <meta name="description" content="콘텍트 페이지의 디스크립션입니다." />
      </Helmet>
      <div className="Contact grow">
        <h1>Contact</h1>
      </div>
    </>
  );
}
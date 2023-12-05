import React from "react";
import { Helmet } from "react-helmet-async";
import LoginForm from "../components/form/LoginForm";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>React Login</title>
        <meta name="description" content="로그인 페이지의 디스크립션입니다." />
      </Helmet>
      <div className="Login grow">
				<LoginForm/>
      </div>
    </>
  );
}
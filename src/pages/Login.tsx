import { Helmet } from "react-helmet-async";
import LoginForm from "@/components/form/LoginForm"

export default function Login() {
  return (
    <>
      <Helmet>
        <title>React Login</title>
        <meta name="description" content="로그인 페이지의 디스크립션입니다." />
      </Helmet>
      <div className="flex-grow flex justify-center items-center max-w-full flex-col py-28 px-14 md:px-20 lg:px-32 xl:px-52 h-40">
				<LoginForm/>
      </div>
    </>
  );
}

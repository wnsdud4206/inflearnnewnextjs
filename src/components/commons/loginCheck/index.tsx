import { useRouter } from "next/router";
import React, { useEffect } from "react";

const LoginCheck = (Component: React.FC) => () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능");
      void router.push("/section23/23-05-login-check-hoc/indexmy");
    }
  }, []);

  return <Component />;
};

export default LoginCheck;

import { useRouter } from "next/router";
import { useEffect } from "react";

// 왜 default가 아니라 그냥 내보냈지?
export const LoginCheck = (Component: any) => (props: any): any => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);

  return <Component {...props} />;
};
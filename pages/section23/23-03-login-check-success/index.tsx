import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  // 현재 fetchPolicy는 default값인 cache-first
  // variables에 들어가는 args, 즉, 인자가 없기 때문에 인자타입은 없어도 된다.
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능");
      void router.push("section23/23-03-login-check");
    }
  }, []);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

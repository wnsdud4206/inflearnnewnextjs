import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../src/commons/types/generated/types";
import LoginCheck from "../../../src/components/commons/loginCheck";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginPage(): JSX.Element {
  const router = useRouter();
  // 현재 fetchPolicy는 default값인 cache-first
  // variables에 들어가는 args, 즉, 인자가 없기 때문에 인자타입은 없어도 된다.
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

export default LoginCheck(LoginPage);

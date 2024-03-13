import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [input, setInput] = useState({ email: "", password: "" });
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  // accessToken state가 필요없다면 지워되는데 콤마(,)는 지우면 안된다.(useState도?) 왜 콤마는 지우면 안되나면 나중에 구조분해할당을 배울 때 이해할 수 있다.
  // *recoil 공식 사이트의 문서를 보니까 useSetRecoilState로 accessTokenState를 넘겨주고 아래처럼 굳이 accessToken state를 지울 필요없이 setAccessToken만 사용할 수 있다는데?, state를 사용할 때는 useRecoilValue(accessToken) 이런식으로, 일단 아래처럼 state를 지우고 사용하는 원리를 배우기 위해 그대로 진행
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeInput = ({
    currentTarget: { id, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [id]: value,
    });
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      // 1. 로그인 mutation 날려서 accessToken 받아오기
      const { email, password } = input;
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });

      console.log(result.data?.loginUser.accessToken); // accessToken

      const accessToken = result.data?.loginUser.accessToken;

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        alert("로그인 실패");
        return;
      }
      setAccessToken(accessToken);

      // 로그인 성공 페이지로 이동하기
      void router.push("/section23/23-01-login-success");
    } catch (error) {
      // 그냥 error.message로 사용하면 error에 message가 있는지 모르겠다는 문제가 생겨서 if문으로 처리, error가 Error에서 파생된 건지
      /* ex.
        const data = new Date();
        console.log(data instanceof Date);  // true
      */
      if (error instanceof Error) {
        alert(error.message);
        console.error(error.message);
      }
    }
  };

  return (
    <>
      email: <input id="email" type="text" onChange={onChangeInput} />
      password: <input id="password" type="text" onChange={onChangeInput} />
      <button onClick={onClickLogin}>Login</button>
    </>
  );
}

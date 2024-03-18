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

  // console.log(localStorage.getItem("accessToken"));

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

      console.log(result.data?.loginUser.accessToken);

      const accessToken = result.data?.loginUser.accessToken;

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        alert("로그인 실패");
        return;
      }
      setAccessToken(accessToken);
      // Local Storage에 저장, 보안상 문제가 되기 때문에 임시로 사용, 나중에 지울 예정
      localStorage.setItem("accessToken", accessToken);

      void router.push("/section23/23-05-login-check-hoc-success");
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

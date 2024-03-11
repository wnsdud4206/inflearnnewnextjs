import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
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
  const [input, setInput] = useState({ email: "", password: "" });
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeInput = ({
    currentTarget: { id, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [id]: value,
    });
  };

  const onClickLogin = async (): Promise<void> => {
    const { email, password } = input;
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });

    console.log(result.data?.loginUser.accessToken); // accessToken

    const { accessToken } = result.data?.loginUser;
  };

  return (
    <>
      email: <input id="email" type="text" onChange={onChangeInput} />
      password: <input id="password" type="text" onChange={onChangeInput} />
      <button onClick={onClickLogin}>Login</button>
    </>
  );
}

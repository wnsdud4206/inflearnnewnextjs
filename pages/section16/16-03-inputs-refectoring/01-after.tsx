import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });
  const [myFunc] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const { writer, title, contents } = inputs;
    if (writer === "" || title === "" || contents === "") {
      alert("빈칸이 없도록 입력해주세요!");
      return;
    }
    const result = await myFunc({
      variables: {
        writer,
        title,
        contents,
      },
    });
    console.log(result);
  };

  const onChangeInp = ({
    target: { id, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    const newInputs = { ...inputs, [id]: value };
    setInputs(newInputs);
  };

  return (
    <div>
      작성자: <input id="writer" type="text" onChange={onChangeInp} />
      제목: <input id="title" type="text" onChange={onChangeInp} />
      내용: <input id="contents" type="text" onChange={onChangeInp} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}

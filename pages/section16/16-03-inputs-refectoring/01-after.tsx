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
      // variables: {
      //   writer,
      //   title,
      //   contents,
      // },
      // 이것도 아래처럼 간단하게 spread를 사용해서 한 줄로
      variables: { ...inputs },
    });
    console.log(result);
  };

  const onChangeInputs = ({
    target: { id, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    // const newInputs = { ...inputs, [id]: value };
    // setInputs(newInputs);
    // 위처럼 기존 state인 inputs를 사용하거나 아래처럼 prev를 사용해도 상관없지만 유지보수나 안정성 등 여러가지 측면에서 기존 데이터인 prev를 사용하는 편이 더 좋다.
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      제목: <input id="title" type="text" onChange={onChangeInputs} />
      내용: <input id="contents" type="text" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}

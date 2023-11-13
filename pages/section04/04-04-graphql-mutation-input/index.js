import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inp, setInp] = useState({ writer: "", title: "", contents: "" });
  const [myFunc] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const { writer, title, contents } = inp;
    if (!writer || !title || !contents) {
      alert("빈칸이 없도록 입력해주세요!");
      return;
    }
    const result = await myFunc({
      $: {
        writer,
        title,
        contents,
      },
    });
    console.log(result);
  };

  const onChangeInp = ({ target: { id, value } }) => {
    const newInp = { ...inp, [id]: value };
    setInp(newInp);
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

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
  const [writer, setWriter] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [contents, setContents] = useState<string>();

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    if (writer === "" || title === "" || contents === "") {
      alert("빈칸이 없도록 입력해주세요!");
      return;
    }
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event?.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event?.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event?.target.value);
  };

  return (
    <div>
      작성자: <input id="writer" type="text" onChange={onChangeWriter} />
      제목: <input id="title" type="text" onChange={onChangeTitle} />
      내용: <input id="contents" type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}

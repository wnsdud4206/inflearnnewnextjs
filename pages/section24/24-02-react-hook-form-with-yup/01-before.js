import { useState } from "react";

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const onClickSubmit = async () => {

  };

  const onChangeWriter = (event) => {
    setWriter(event.currentTarget.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const onChangeContents = (event) => {
    setContents(event.currentTarget.value);
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

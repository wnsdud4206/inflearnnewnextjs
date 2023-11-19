import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";


export default function BoardWrite() {
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
    <BoardWriteUI onClickSubmit={onClickSubmit} onChangeInp={onChangeInp} />
  );
}
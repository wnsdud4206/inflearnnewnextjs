import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite({ isEdit, data }) {
  const [inp, setInp] = useState({ writer: "", title: "", contents: "" });
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const onClickSubmit = async () => {
    const { writer, title, contents } = inp;
    if (!writer || !title || !contents) {
      alert("빈칸이 없도록 입력해주세요!");
      return;
    }
    const result = await createBoard({
      variables: {
        writer,
        title,
        contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    try {
      const { writer, title, contents } = inp;

      const myVariables = { number: Number(router.query.number) };
      // 1. 아무것도 건드리지 않은 input의 defaultValue는 아직 onChangeInp 이벤트를 동작하지 않아서 inp state는 빈값이다. 결국 입력해준 값이 없고 없는 값으로 수정하도록 하지 않을 것이므로 updateBoard하지 않는다.
      // 2. input의 defaultValue를 지우고 다시 이전과 같은 값으로 입력해주었을 경우에도 굳이 updateBoard할 필요가 없다.
      if (writer !== "" && writer !== data.fetchBoard.writer) {
        myVariables.writer = writer;
      }
      if (title !== "" && title !== data.fetchBoard.title) {
        myVariables.title = title;
      }
      if (contents !== "" && contents !== data.fetchBoard.contents) {
        myVariables.contents = contents;
      }

      console.log(myVariables);
      // 이전 값과 똑같으면 굳이 요청하지 않도록 방지하기
      // 일부분만 수정이 되는지 확인해보기 - 된다!
      const result = await updateBoard({
        variables: myVariables,
      });
      console.log(result);
      router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  const onChangeInp = ({ target: { id, value } }) => {
    const newInp = { ...inp, [id]: value };
    setInp(newInp);
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeInp={onChangeInp}
      isEdit={isEdit}
      data={data}
    />
  );
}

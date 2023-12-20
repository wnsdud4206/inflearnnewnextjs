import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { type ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import type { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite({
  isEdit,
  data,
}: IBoardWriteProps): JSX.Element {
  const [inp, setInp] = useState({ writer: "", title: "", contents: "" });
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const onClickSubmit = async (): Promise<void> => {
    const { writer, title, contents } = inp;
    if ((writer === "") || (title === "") || (contents === "")) {
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
    void router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`,
    );
  };

  const onClickUpdate = async (): Promise<void> => {
    try {
      const { writer, title, contents } = inp;

      const myVariables: IMyVariables = { number: Number(router.query.number) };
      // typescript 특성상 처음 할당된 데이터의 타입이 추론되어버려서 이후 타입에 없는 데이터들은 객체에 추가하지 못하는 문제가 생김, 그렇기 때문에 미리 interface로 타입을 만들어줘야함
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
      void router.push(
        `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`,
      );
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  // ChangeEvent<HTMLInputElement>, 이 타입이 제일 어려움... 더 공부해야할듯, onClick 이벤트 타입은 mouseEvent를 import 해야 됐였던 걸로 기억
  const onChangeInp = ({ target: { id, value } }: ChangeEvent<HTMLInputElement>): void => {
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
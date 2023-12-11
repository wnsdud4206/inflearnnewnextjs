import { ChangeEvent, MouseEvent } from "react";
import { RedInput, BlueButton } from "./BoardWrite.styles";

interface IBoardWriteUIProps {
  onChangeInp: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: any;
  data?: any;
}

export default function BoardWriteUI({
  onChangeInp,
  onClickUpdate,
  onClickSubmit,
  isEdit,
  data,
}: IBoardWriteUIProps) {
  return (
    <div>
      작성자:{" "}
      <RedInput
        id="writer"
        type="text"
        defaultValue={data?.fetchBoard.writer}
        onChange={onChangeInp}
      />
      제목:{" "}
      <input
        id="title"
        type="text"
        defaultValue={data?.fetchBoard.title}
        onChange={onChangeInp}
      />
      내용:{" "}
      <input
        id="contents"
        type="text"
        defaultValue={data?.fetchBoard.contents}
        onChange={onChangeInp}
      />
      <BlueButton onClick={isEdit ? onClickUpdate : onClickSubmit}>
        {isEdit ? "수정" : "등록"}하기
      </BlueButton>
    </div>
  );
}

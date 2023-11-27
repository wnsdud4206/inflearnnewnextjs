import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI({
  onChangeInp,
  onClickUpdate,
  onClickSubmit,
  isEdit,
  data,
}) {
  return (
    <div>
      작성자:{" "}
      <RedInput
        id="writer"
        type="text"
        defaultValue={isEdit ? data?.fetchBoard?.writer : ""}
        onChange={onChangeInp}
      />
      제목:{" "}
      <input
        id="title"
        type="text"
        defaultValue={isEdit ? data?.fetchBoard?.title : ""}
        onChange={onChangeInp}
      />
      내용:{" "}
      <input
        id="contents"
        type="text"
        defaultValue={isEdit ? data?.fetchBoard?.contents : ""}
        onChange={onChangeInp}
      />
      <BlueButton onClick={isEdit ? onClickUpdate : onClickSubmit}>
        {isEdit ? "수정" : "등록"}하기
      </BlueButton>
    </div>
  );
}

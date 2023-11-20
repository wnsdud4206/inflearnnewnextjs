import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI({ onChangeInp, onClickSubmit, isActive }) {
  return (
    <div>
      작성자: <RedInput id="writer" type="text" onChange={onChangeInp} />
      제목: <input id="title" type="text" onChange={onChangeInp} />
      내용: <input id="contents" type="text" onChange={onChangeInp} />
      <BlueButton onClick={onClickSubmit} disabled={!isActive} isActive={isActive}>GRAPHQL-API 요청하기</BlueButton>
    </div>
  );
}

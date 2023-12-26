import { BulbOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

// icon을 글자로 취급되기 때문에 font-size로 크기조절
const MyIcon = styled(BulbOutlined)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
    // console.log(event.target.id); // MyIcon자체에 id와 onClick이 있을 때 id를 불러오지 못함(빈문자열, MyIcon을 HTML 문서로 보면 span 태그 안에 svg가 있는 형태이고 id는 span에 부여됐는데 클릭은 svg를 클릭하게 되는 상황이다. 이럴 경우 이벤트 버블링을 응용하면 된다. div 같은 걸로 감싸주고 id와 onClick 속성을 div에게 넘겨주면 된다.
    // 해결법, target말고 currenttarget 사용
    console.log(event.currentTarget.id);
  };

  return (
    <>
      <BulbOutlined />
      {/* <MyIcon id="삭제할게시글ID" onClick={onClickDelete} /> */}
      {/* 해결법 */}
      <div id="삭제할게시글ID" onClick={onClickDelete}>
        <MyIcon />
      </div>
    </>
  );
}

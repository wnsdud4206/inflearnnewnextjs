import { css } from "@emotion/css";
// @emotion/css의 css는 className에 적용 되는데 @emotion/react의 css는 왜 적용 안되지?
import styled from "@emotion/styled";

export default function ExamplePage() {
  const aaa = 3;

  return (
    <div
      className={css`
        font-size: 50px;
      `}
    >
      {aaa}
    </div>
  );
}

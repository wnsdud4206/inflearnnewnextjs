import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    // 1. 화살표함수
    setCount((prev) => prev + 1);

    // 2. 함수선언식
    setCount(function (prev) {
      // 로직 추가 가능, 물론 화살표 함수로 코드블록은 ({ ... }) 이런식으로 감싸주면 여러 줄, 즉, 로직 추가 가능하다.
      return prev + 1;
    });

    // 3. 매개변수 바꾸기
    setCount((abc) => abc + 1);
  };

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>up</button>
    </div>
  );
}

import React, { useState } from "react";
import { Rate } from "antd";

// 기존에 function 키워드로 컴포넌트를 만들 때 return type은 JSX.Element로 했고 이렇게 화살표함수로 만들 경우 return type은 React.FC 라고 명시한다.(FC는 Functional Component의 약자이다.)
const App: React.FC = () => {
  const [value, setValue] = useState(3);

  // === 1단계 방식 ===
  // const onChangeStar = (value: number): void => {
  //   setValue(value);
  // }

  // === 2단계 방식 ===
  // const onChangeStar = (value) => setValue(value);
  /* 화살표함수는 return위에 로직이 없다면 함수의 중괄호를 소괄호로 바꾸고 return도 생략하여 한 줄로 쓸 수 있었고 그 리턴값이 객체가 아니라면 소괄호도 생략할 수 있었다.(규칙에 어긋나는 부분이 있지만 일단무시) */

  return (
    // 1단계 방식
    // <Rate onChange={onChangeStar} value={value} />
    /* 위 onChange는 우리가 알고있는 HTML의 onChange가 아니라 이 라이브러리를 만든 사람들이 만든 onChange이다. onChange에 마우스를 올려보면 타입이 추론되는데 number타입의 value라는 인자가 들어오게 되어있다고 알려준다. 따라서 onChangeStart에 event가 들어오는 것이 아니라 value가 들어오게 된다. 별점 5점을 눌렀을 때 value의 값이 5가 되고 setValue에도 5라는 값이 들어가 value는 5가 되고 value state는 Rate컴포넌트에 바인딩이 되니까 화면에 5개의 별점이 보여지게 된다. */
    // 2단계 방식
    // <Rate onChange={onChangeStar} value={value} />
    // 3단계 방식
    // <Rate onChange={(value) => setValue(value)} value={value} />
    // onChangeStar 함수의 내용 자체를 넣어도 작동 되는 것을 알고 있을 것이다.
    // 4단계 방식
    <Rate onChange={setValue} value={value} />
    /* 함수가 바인딩 되어 있을 때 그 함수에 들어온 인자값이 그대로 안에있는 함수의 인자값으로 전달되면 4단계같이 최종 생략할 수 있다. */
  );
};

export default App;

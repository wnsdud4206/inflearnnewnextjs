import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // 그려지고 난 뒤, componentDidMount 와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, [])

  // // 그려지고 난 뒤 변경되고 실행, 리렌더 됐을 때, componentDidMount + componentDidUpdate(처음 렌더됐을 때 실행 + 변경될 때 실행)
  useEffect(() => {
    console.log("변경되고 나서 실행");
  })

  // // 그려지고 난 뒤 사라질 때 실행, ex. 채팅방 나가기 API(접속자확인), componentWillUnmount(useEffect도 로직이 있는 경우 componentDidMount + componentWillUnmount)
  useEffect(() => {
    return () => {  // 이부분이 componentWillUnmount 와 동일
      console.log("사라지기 전에 실행");
    }
  }, [])

  // 1. useEffect 하나로 합치기, componentDidMount + componentDidUpdate, componentWillUnmout
  useEffect(() => {
    console.log("그려지고 나서 실행");
    return () => {
      console.log("사라지기 전에 실행");
    }
  })
  // useEffect의 두번 째 인자로 배열([])을 넣거나 없기도 한데 이 배열은 dependency라고 한다. 이 dependency가 없으면 맨 처음에도 실행이 되거나 변경이 일어나면 무조건 실행이 되고 비어있는 dependency가 있으면 처음에 한 번은 실행되지만 어떤 변화가 있어도 실행되지 않는다. dependency에 값이 없다면 맨 처음에 실행이 되고 해당 값에 변화가 일어나면 실행된다.

  // 2. useEffect 잘못된 사용법

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    // use가 붙은애들은(hook) 함수형 컴포넌트에서 사용하는 것이고 class component에서는 따로 불러와야한다. 지금은 useRouter를 사용해야하지만 class component기때무니에 next/router에서 Router(default로 내보내는 중)를 import 하여 사용하면 된다.
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>increase</button>
      <button onClick={onClickMove}>out</button>
    </>
  );
}

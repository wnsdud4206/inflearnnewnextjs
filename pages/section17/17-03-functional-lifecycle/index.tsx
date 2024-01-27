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
    console.log("그려지고 나서 실행&변경되고 실행");
    return () => {
      console.log("사라지기 전에 실행");
    }
  })
  // useEffect의 두번 째 인자로 배열([])을 넣거나 없기도 한데 이 배열은 dependency(의존성 배열)라고 한다. 이 dependency가 없으면 맨 처음에도 실행이 되거나 변경이 일어나면 무조건 실행이 되고 비어있는 dependency가 있으면 처음에 한 번은 실행되지만 어떤 변화가 있어도 실행되지 않는다. dependency에 값이 없다면 맨 처음에 실행이 되고 해당 값에 변화가 일어나면 실행된다.

  // 2. useEffect 잘못된 사용법(2-1. 추가렌더링, 2-2. 무한루프)
  useEffect(() => {
    // 2-1.
    // setWriter();
    // useEffect는 모두 그려지고 나서 실행이 되는 것이다. 이 문서를 예를 들어 위쪽 부터 useCount가 만들어지고 useEffect는 일단 건너뛰고 onClickCountUp, onClickMove가 만들어지고 return이 생성되고 나서야 useEffect의 내용이 실행되는 것이다. 그래서 이 useEffect 안에서 setState를 하게 되면 state가 바뀌고 바뀐 state로 또 불필요한 리렌더링이 된다.
    // 그렇다고 무조건 setState를 useEffect 안에서 하면 안되는 것은 아니고 어쩔 수 없이 사용해야 할 때도 있다. 하지만 되도록이면 사용하지 않는 것이 좋다.

    // 2-2.
    // setCount(prev => prev + 1);
    // dependency에 count state가 있는 상태에서 setCount를 해버리게 되면 count state의 값이 변경되어 리렌더링 되고 리렌더링이 되면 또 여기 useEffect에서 setCount를 실행해서 count state의 값이 변경되고 이렇게 무한루프에 빠져버리는 현상이 발생한다.
  }, [count])

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    // use가 붙은애들은(hook) 함수형 컴포넌트에서 사용하는 것이고 class component에서는 따로 불러와야한다. 지금은 useRouter를 사용해야하지만 class component기때무니에 next/router에서 Router(default로 내보내는 중)를 import 하여 사용하면 된다.
    void router.push("/");
  };

  console.log("useEffect보다 밑에 있지만 먼저 실행");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>increase</button>
      <button onClick={onClickMove}>out</button>
    </>
  );
}

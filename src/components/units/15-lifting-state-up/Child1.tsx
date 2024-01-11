import type { Dispatch, SetStateAction } from "react";

interface IChild1Props {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export default function Child1(props: IChild1Props): JSX.Element {

  const onClickCountUp = (): void => {
    props.setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>자식1의 카운트: {props.count}</div>
      <button onClick={onClickCountUp}>up</button>
    </div>
  );
}
import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount((prev) => prev + 1);
    console.log(count);
    setCount((prev) => prev + 1);
    console.log(count);
    setCount((prev) => prev + 1);
    console.log(count);
  };
  // const onClickCountDown = (): void => {
  //   setCount((prev) => prev - 1);
  // };

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>up</button>
      {/* <button onClick={onClickCountDown}>down</button> */}
    </div>
  );
}

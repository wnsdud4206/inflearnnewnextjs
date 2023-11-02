import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };
  const onClickCountDown = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>up</button>
      <button onClick={onClickCountDown}>down</button>
    </div>
  );
}

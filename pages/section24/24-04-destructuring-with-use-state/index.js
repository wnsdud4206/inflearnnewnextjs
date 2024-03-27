import { useState } from "react";

export default function CounterStatePage() {
  const result = useState(0);

  const onClickCountUp = () => {
    result[1](result[0] + 1);
  };
  const onClickCountDown = () => {
    result[1](result[0] - 1);
  };

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>up</button>
      <button onClick={onClickCountDown}>down</button>
    </div>
  );
}

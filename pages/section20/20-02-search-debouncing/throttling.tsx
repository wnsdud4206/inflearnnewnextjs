import _ from "lodash";
import { useState } from "react";
import type { MouseEvent } from "react";

export default function MyThrottlingPage(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  // mouse click event는 안되나? - https://stackoverflow.com/questions/64171641/use-lodash-or-some-other-library-to-throttle-a-default-click-event-listener-on-h
  // throttle이 onClick은 안되나보다.
  const getThrottle = _.throttle(
    (upNumber) => {
      console.log("d");
      setCount((prev) => prev + upNumber);
    },
    1000,
    { trailing: false },
  );

  const countIncrease = (): void => {
    getThrottle(1);
  };

  // mouseMove event나 scroll event 같은 건 됨
  // const getThrottle = _.throttle((x, y) => {
  //   console.log(x, y);
  // }, 1000);

  // const onMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
  //   getThrottle(e.clientX, e.clientY);
  // };

  return (
    <>
      <span>{count}</span>
      <button onClick={countIncrease}>increase</button>
      {/* <div
        onMouseMove={onMouseMove}
        style={{ width: "500px", height: "500px", backgroundColor: "darkgray" }}
      ></div> */}
    </>
  );
}

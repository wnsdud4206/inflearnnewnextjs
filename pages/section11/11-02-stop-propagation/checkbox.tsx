import type { MouseEvent } from "react";

export default function Checkbox(): JSX.Element {
  const qqq2 = (): void => {
    alert("2번");
  };
  const qqq3 = (event: MouseEvent<HTMLInputElement>): void => {
    event.stopPropagation();
    alert("3번");
  };

  return (
    <span style={{ margin: "10px" }} onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}

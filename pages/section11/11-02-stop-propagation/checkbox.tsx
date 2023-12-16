import { MouseEvent } from "react";

export default function Checkbox() {
  const qqq2 = () => {
    alert("2번");
  };
  const qqq3 = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    alert("3번");
  };

  return (
    <span style={{ margin: "10px" }} onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}

import type { MouseEvent } from "react";

interface ITestComponentOneProps {
  onClickMyIdPrint: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function TestComponentTwo(
  props: ITestComponentOneProps,
): JSX.Element {
  return (
    <button id="two" onClick={props.onClickMyIdPrint}>
      hi2
    </button>
  );
}

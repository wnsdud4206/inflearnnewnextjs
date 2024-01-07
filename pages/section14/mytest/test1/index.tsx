import type { MouseEvent } from "react";

interface ITestComponentOneProps {
  id: string;
  onClickMyIdPrint: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function TestComponentOne(
  props: ITestComponentOneProps,
): JSX.Element {
  return (
    <button onClick={props.onClickMyIdPrint}>
      hi1
    </button>
  );
}

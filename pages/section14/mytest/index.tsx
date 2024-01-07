import type { MouseEvent } from "react";
import TestComponentOne from "./test1";
import TestComponentTwo from "./test2";

export default function MytestPage(): JSX.Element {
  const onClickMyIdPrint = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log(event);
    console.log(event.currentTarget.id);
  };

  return (
    <>
      <TestComponentOne id="test" onClickMyIdPrint={onClickMyIdPrint} />
      <TestComponentTwo onClickMyIdPrint={onClickMyIdPrint} />
    </>
  );
}

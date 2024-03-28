import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../src/commons/stores";
import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseAuthPage(): JSX.Element {
  const { onClickMoveToPage, visitedPage } = useMoveToPage();

  console.log(visitedPage);

  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/markets")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypages")}>마이페이지로 이동</button>
    </>
  );
}

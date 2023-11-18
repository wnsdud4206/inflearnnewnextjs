import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    // 무조건 /(슬레시) 부터 입력 시작, pages 경로부터 시작하기 때문
    router.push("/section05/05-04-dynamic-routing-board-query-moved/10");
  };
  const onClickMove2 = () => {
    // 무조건 /(슬레시) 부터 입력 시작, pages 경로부터 시작하기 때문
    router.push("/section05/05-04-dynamic-routing-board-query-moved/20");
  };
  const onClickMove3 = () => {
    // 무조건 /(슬레시) 부터 입력 시작, pages 경로부터 시작하기 때문
    router.push("/section05/05-04-dynamic-routing-board-query-moved/50");
  };

  return (
    <div>
      {/* Emmet: button[onClick={onClickMove}]{$게시글 이동하기}*3 */}
      <button onClick={onClickMove1}>10번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>20번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>50번 게시글로 이동하기</button>
    </div>
  );
}
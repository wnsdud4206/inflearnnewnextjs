import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    // 무조건 /(슬레시) 부터 입력 시작, pages 경로부터 시작하기 때문
    router.push("/section05/05-02-static-routing-board-moved/1");
  };
  const onClickMove2 = () => {
    // 무조건 /(슬레시) 부터 입력 시작, pages 경로부터 시작하기 때문
    router.push("/section05/05-02-static-routing-board-moved/2");
  };
  const onClickMove3 = () => {
    // 무조건 /(슬레시) 부터 입력 시작, pages 경로부터 시작하기 때문
    router.push("/section05/05-02-static-routing-board-moved/3");
  };

  return (
    <div>
      {/* Emmet: button[onClick={onClickMove}]{$게시글 이동하기}*3 */}
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
    </div>
  );
}
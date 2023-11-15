import { useRouter } from "next/router"

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    // 무조건 /(슬레시) 부터 입력 시작, pages 경로부터 시작하기 때문
    router.push("/section05/05-01-static-routing-moved");
  }
  
  return (
    <button onClick={onClickMove}>페이지 이동하기</button>
  )
}
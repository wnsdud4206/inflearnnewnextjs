import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <div>
      <h3>{router.query.number}번 게시글</h3>
      {data ? (
        <>
          {/* <h3>{data.fetchBoard.number}번 게시글</h3> */}
          <h2>제목: {data.fetchBoard?.title}</h2>
          <span>작성자: {data.fetchBoard?.writer}</span>
          <p>내용: {data.fetchBoard?.contents}</p>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

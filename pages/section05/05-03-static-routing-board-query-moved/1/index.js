import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 10) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  return (
    <div>
      {data ? (
        <>
          <h3>{data.fetchBoard.number}번 게시글</h3>
          <h2>제목: {data.fetchBoard.title}</h2>
          <span>작성자: {data.fetchBoard.writer}</span>
          <p>내용: {data.fetchBoard.contents}</p>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

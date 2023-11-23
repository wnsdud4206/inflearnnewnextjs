import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data ? (
        <>
          {data.fetchBoards.map((el) => (
            <div>
              <span style={{ margin: "10px" }}>
                <input type="checkbox" />
              </span>
              <span style={{ margin: "10px" }}>{el.number}</span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <span style={{ margin: "10px" }}>{el.writer}</span>
            </div>
          ))}
          {/* <h3>{data.fetchBoard.number}번 게시글</h3>
          <h2>제목: {data.fetchBoard.title}</h2>
          <span>작성자: {data.fetchBoard.writer}</span>
          <p>내용: {data.fetchBoard.contents}</p> */}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

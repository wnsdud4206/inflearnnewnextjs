import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types";

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

export default function StaticRoutingBoardMovedPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <div>
      <h3>{router.query.number}번 게시글</h3>
      {((data !== null) && (data !== undefined)) ? (
        <>
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

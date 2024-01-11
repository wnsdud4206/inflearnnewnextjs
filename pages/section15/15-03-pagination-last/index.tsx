import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingBoardMovedPage(): JSX.Element {
  const [startPage, setStartPage] = useState<number>(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // dataBoardsCount 도 state다
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  // 주의할 점이 여기서 나오는 12851라는 숫자(양에다라 바뀜)는 page가 아니라 게시글의 갯수이다. 그래서 나누기 10(한 번에 보여주는 boards 갯수)에 올림을 해주면 페이지의 갯수가 된다.

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10)
      : 1;
  console.log(`dataBoardsCount: ${dataBoardsCount?.fetchBoardsCount}`);
  console.log(`lastPage: ${lastPage}`);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return; // 혹은 같은 조건에 조건부 렌더링으로 prev 버튼을 숨기는 방법도 할 수 있을 듯
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>Prev</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: "5px" }}
            >
              {index + startPage}
            </span>
          ),
      )}
      <span onClick={onClickNextPage}>Next</span>
    </div>
  );
}

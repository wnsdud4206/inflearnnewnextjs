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
  // const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<number>(12850);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: countData } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  // // ex) 12851 = 1286 page
  console.log(countData);
  console.log(countData?.fetchBoardsCount);
  console.log(typeof countData?.fetchBoardsCount);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log()
    void refetch({ page: Number(event.currentTarget.id) });
  };

  // const onClickPagenation = (event: MouseEvent<HTMLButtonElement>): void => {
  //   // const { fetchBoardsCount }: number = countData;
  //   if (event.currentTarget.id === "prev") {
  //     setPagination((prev) => prev - 10);
  //   } else if (event.currentTarget.id === "next") {
  //     setPagination((prev) => prev + 10);
  //   }
  // };
  const onClickPagePrev = (): void => {
    setPagination((prev) => prev - 10);
  };
  const onClickPageNext = (): void => {
    // const count = countData?.fetchBoardsCount < pagination + 10 ? countData?.fetchBoardsCount - pagination : pagination + 10;
    // console.log(count);
    setPagination((prev) => prev + 10);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <div>
        <button id="prev" onClick={onClickPagePrev}>
          Prev
        </button>
        {new Array(10).fill(1).map(
          (_, index): JSX.Element => (
            <button
              key={index + pagination}
              id={String(index + pagination)}
              onClick={onClickPage}
            >
              {index + pagination}
            </button>
          ),
        )}
        <button id="next" onClick={onClickPageNext}>
          Next
        </button>
      </div>
    </div>
  );
}

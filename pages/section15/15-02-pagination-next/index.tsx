import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
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

export default function StaticRoutingBoardMovedPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  // 이렇게 되면 next버튼을 눌렀을 때는 11, 21, 31, ...  첫번째 페이지가 보이고 prev버튼을 눌렀을 때도 1, 11, 21, ... 페이지가 보이게 될 듯, 내가 의도했던 건 prev, next 버튼을 눌러도 목록이 refetch 되지 않고 page 숫자 버튼을 눌렀을 때만 목록이 refetch 되게끔 하려고 했다.
  const onClickPrevPage = (): void => {
    setStartPage(startPage - 10);
    void refetch({page: startPage - 10});
  };
  const onClickNextPage = (): void => {
    setStartPage(startPage + 10);
    void refetch({page: startPage + 10});};

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>Prev</span>
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + startPage} id={String(index + startPage)} onClick={onClickPage}>
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>Next</span>
    </div>
  );
}

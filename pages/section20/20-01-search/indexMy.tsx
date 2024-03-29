import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({
      search: searchInput,  // 없어야됨, 검색창에 단어가 있지만 검색하기는 누르지 않은 상태에서 페이지네이션을 클릭하면 검색이 해버리는 문제가 생김
      page: Number(event.currentTarget.id),
    });
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };

  const onClickSearch = (): void => {
    void refetch({ search: searchInput, page: 1 });
  };

  return (
    <div>
      검색어입력: <input type="text" value={searchInput} onChange={onChangeInput} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + 1}
          id={String(index + 1)}
          onClick={onClickPage}
          style={{ cursor: "pointer" }}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

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
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    // 검색에서 refetch를 할 때, search 검색어가 refetch에 이미 저장되어 있는 상태
    void refetch({
      page: Number(event.currentTarget.id),
    });
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = (): void => {
    void refetch({ search, page: 1 });
  };

  return (
    <div>
      검색어입력: <input type="text" value={search} onChange={onChangeSearch} />
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

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid"; // uuidv4로 이름 변경하고 사용하는게 공식

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
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({
      page: Number(event.currentTarget.id),
    });
  };

  const getDebounce = _.debounce(async (value): Promise<void> => {
    await refetch({ search: value, page: 1 });
    setKeyword(value); // 2. state에 키워드 저장
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>
            {el.title
              .replaceAll(keyword, `@&%${keyword}@&%`)
              .split("@&%")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
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

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
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    /*
    const newMyIndex = myIndex;
    newMyIndex[Number(event.currentTarget.id)] = true;
    setMyIndex(newMyIndex);
    // newMyIndex는 myIndex의 주소만을 가져올 거라 setMyIndex 에 newMyIndex를 넘겨줘도 state는 달라진게 없다고 판단해서 state값을 수정하려도 시도도 하지 않고 리렌더링도 되지 않는 것이다. 그래서 const newMyIndex = [...myIndex] 로 해주어야 반영이 된다.
    */
    const newMyIndex = [...myIndex];
    newMyIndex[Number(event.currentTarget.id)] = true;
    setMyIndex(newMyIndex);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              edit
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        ),
      )}
    </div>
  );
}

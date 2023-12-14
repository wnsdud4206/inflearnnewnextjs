import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import { IQuery } from "../../../src/commons/types/generated/types";

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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  const onClickAlert = (event: MouseEvent<HTMLDivElement>): void => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  };

  return (
    <div>
      {data ? (
        <>
          {data.fetchBoards?.map((el: any) => (
            <div key={el.number} id={el.writer} onClick={onClickAlert}>
              <span style={{ margin: "10px" }}>
                <input type="checkbox" />
              </span>
              <span style={{ margin: "10px" }}>{el.number}</span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <span style={{ margin: "10px" }}>{el.writer}</span>
            </div>
          ))}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

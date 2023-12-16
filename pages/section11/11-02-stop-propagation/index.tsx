import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";
import Checkbox from "./checkbox";

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

  const qqq1 = () => {
    alert("1번");
  };
  const qqq4 = () => {
    alert("4번");
  };

  return (
    <div>
      {data ? (
        <>
          {data.fetchBoards?.map((el: any) => (
            <div key={el.number} id={el.writer} onClick={qqq1}>
              <Checkbox />
              <span style={{ margin: "10px" }} onClick={qqq4}>
                {el.number}
              </span>
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

import { gql, useQuery } from "@apollo/client";
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const onClickBasket = (el: any) => () => {
    const localBasket = localStorage.getItem("basket");
    const newBasket = localBasket ? JSON.parse(localBasket) : [];
    // const basket = JSON.stringify(newBasket.push(el)); // 이렇게 하면 안됨, 안에서 연산할 수 없는 듯
    newBasket.push(el);
    const basket = JSON.stringify(newBasket);
    localStorage.setItem("basket", basket);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
    </div>
  );
}

import { gql, useQuery } from "@apollo/client";
import type {
  IBoard,
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

  const onClickBasket = (basket: IBoard) => () => {
    // 1. 기존 장바구니 가져오기
    const baskets: IBoard = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    // 2. 이미 담겼는지 확인하기, 중복확인
    const temp = baskets.filter(
      (el: Pick<IBoard, "_id">) => el._id === basket._id,
    );
    if (temp.length >= 1) {
      alert("이미 담은 상품입니다.");
      return;
    }

    // 3. 내가 클릭한 것 추가하기
    // delete basket.__typename; // 안전하지 못한 사례, basket 객체 원본을 건드리기 때문(현재에서는 아무문제 없지만 이런 코드가 많아지게 되면 나중에 규모가 커지고 이 basket이 여기저기서 사용하고 있을 때 문제가 생길 수 있음, 아예 사용하지 않는 습관을 드는 것이 좋음)
    const { __typename, ...newBasket } = basket;  // 안전한 사례
    // 현재 _id, title, writer 정도만 필요하고 __typename이랑 나머지 다 필요 없는 것 같은데 그럴 경우엔 필요없는 것들을 REST 파라미터로 빼고 사용하는 것들만 구조분해할당으로 뽑으면 되나? 그럼 변수가 한개가 아니라 3개인데 {_id, title, writer} 이런식으로 넣어줘야 하나?

    baskets.push(newBasket);

    // 4. 추가된 장바구니로 변경하기
    localStorage.setItem("baskets", JSON.stringify(baskets));
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

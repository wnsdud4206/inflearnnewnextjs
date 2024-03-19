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
    // 임시로 담아놓는다는 의미로 temp라는 변수명, 중요한 데이터가 아니라는 의미?
    // filter에서 el의 타입이 Pick<IBorad, "_id">라고 되어있는데 IBoard 타입에서 "_id"의 타입만 빼온 것이고 만약 _id가 아니라 writer를 사용하고 있다면 Pick<IBoard, "writer"> 라고 명시해주면 된다.
    // 근데 _id와 writer 둘 다 사용하고 있으면???
    const temp = baskets.filter((el: Pick<IBoard, "_id">) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 담은 상품입니다.");
      return;
    }

    // 3. 내가 클릭한 것 추가하기
    baskets.push(basket);

    // 4. 추가된 장바구니로 변경하기
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  // 만약 장바구니 페이지에서 가져오기도 만들고 시다면
  /*
  localStorage.getItem("baskets"); => 그냥 이렇게 사용하면 pre-rendering 시 에러 발생

  // useEffect 사용
  useEffect(() => {
    localStorage.getItem("baskets");
  }, [])
  */

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

import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      massage
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = ({ target: { id } }) => {
    deleteBoard({
      variables: {
        number: Number(id),
      },
      // refetchQuerys는 배열이며 여러개를 동시에 refetch 해줄 수 있다. 위 deleteBoard명령 수행 후 fetchBoards 다시 받아옴
      // mutation도 다시 받아올 수 있나?
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div>
      {data ? (
        // 특별한 이유가 없으면 Fragment로 감싸기, div는 1개 더 그려야 되서 조금 더 느려지지만 큰 차이는 없긴함
        // 지금 같이 Fragment를 사용한 경우는 코드블록({})엔에서 또 코드블록을 사용할 때는 그냥 코드블록을 다시 입력하면 error가 나고 Fragment로 jsx임을 다시 상기시켜준 뒤 코드블록을 만들어 줘야 제대로 작동함
        // Fragment는 두가지가 있는데 빈태그인 <></> 이것과, react에서 Fragment를 import 해와서 <Fragment></Fragment> 이렇게 사용하는 방법이다. 이 둘의 차이는 크게 없지만 map으로 최상위 태그가 Fragment인 jsx를 출력하는 경우 key값을 줄 때 차이가 있다. 빈태그에는 key 값을 줄 수 없지만 <Fragment></Fragment>는 key값을 줄 수 있으니 위와 같이 Fragment에 key를 줘야하는 상황에서는 <Fragment></Fragment>를 사용해야 한다.
        <>
          {data.fetchBoards.map((el) => (
            <div key={el.number}>
              <span style={{ margin: "10px" }}>
                <input type="checkbox" />
              </span>
              <span style={{ margin: "10px" }}>{el.number}</span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <span style={{ margin: "10px" }}>{el.writer}</span>
              <span>
                <button id={el.number} onClick={onClickDelete}>
                  Delete
                </button>
              </span>
            </div>
          ))}
          {/* <h3>{data.fetchBoard.number}번 게시글</h3>
          <h2>제목: {data.fetchBoard.title}</h2>
          <span>작성자: {data.fetchBoard.writer}</span>
          <p>내용: {data.fetchBoard.contents}</p> */}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
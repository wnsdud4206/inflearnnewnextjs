import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    // 우리가 router.push로 이동을 했을 때 잘 접속을 했어도 백엔드에서 문제가 생길 수 있기 때문에 try&catch문을 사용해서 성공하면 그대로 진행, 실패하면 try의 내용을 즉시 중단하고 catch에서 에러메시지를 출력하도록 해준다.
    try {
      // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 코드를 무시하고, catch에 있는 내용이 실행된
      const result = await createBoard({
        variables: {
          writer: "짱구",
          title: "안녕!",
          contents: "액션가면 최고!",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number); // 생성된 게시글의 number
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`,
      );
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}

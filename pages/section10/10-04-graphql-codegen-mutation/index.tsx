import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  // useState에 타입 명시하는 법
  // const [counter, setCounter] = useState<number>(0);
  
  // ex) const [myFunc] = useMutation<결과타입, 변수타입>(CREATE_BOARD);
  const [myFunc] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  // 이렇게 타입을 주면 myFunc 사용할 때 내용들을 다른 타입으로 입력했을 때 경고를 해준다.(안정성) 그리고 아래 result처럼 변수에 할당해 주고 사용할 때 result.까지만 쳐도 자동완성으로 사용할 수 있는 값들을 알려준다.(편리함)

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunc({
      variables: {
        writer: "짱구",
        title: "안녕!",
        contents: "액션가면 최고!"
      }
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
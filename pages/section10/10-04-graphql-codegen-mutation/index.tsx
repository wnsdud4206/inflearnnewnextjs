import { gql, useMutation } from "@apollo/client";

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
  const [myFunc] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myFunc({
      // variables, $ 둘 다 가능
      $: {
        // 아래의 writer, title, contents도 지금은 정적인 값이지만 state 변수같은 것을 활용하여 데이터를 입력받아 전달해줄 수 있다.
        writer: "짱구",
        title: "안녕!",
        contents: "액션가면 최고!"
      }
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
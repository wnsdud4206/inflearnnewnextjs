import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(write: "짱구", title: "안녕!", contents: "액션가면") {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  const [myFunc] = useMutation(CREATE_BOARD);
  
  const onClickSubmit = async () => {
    const result = await myFunc();
    console.log(result);
  }

  return (
    <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
  );
}
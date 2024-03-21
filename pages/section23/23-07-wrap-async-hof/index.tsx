import { gql, useMutation } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const CREATE_BOARD = gql`
  mutation {
    createBoard(write: "짱구", title: "안녕!", contents: "액션가면") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [myFunc] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunc();
    console.log(result);
  };

  return (
    <button onClick={wrapAsync(onClickSubmit)}>GRAPHQL-API 요청하기</button>
  );
}

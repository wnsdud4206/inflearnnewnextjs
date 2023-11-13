import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    # playground를 참고해서 type을 똑같이, 변수의 타입 적는 곳
    $seller: string
    # CreateProductInput! 타입의 내용은 playground 참고
    $createProductInput: CreateProductInput!
  ) {
    # 실제 우리가 전달할 변수 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      $: {
        seller: "짱구",
        createProductInput: {
          name: "마우스",
          detail: "좋은 마우스",
          price: 3000,
        },
      },
    });
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}

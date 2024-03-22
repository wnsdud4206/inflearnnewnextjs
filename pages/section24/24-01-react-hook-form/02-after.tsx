import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input id="writer" type="text" {...register("writer")} />
      제목: <input id="title" type="text" {...register("title")} />
      내용: <input id="contents" type="text" {...register("contents")} />
      주소:{" "}
      <input
        id="contents"
        type="text"
        {...register("boardAddress.addressDetail")}
      />
      <button>GRAPHQL-API 요청하기</button>
    </form>
  );
}

/*
    <button type="reset">해당 form안의 input들의 내용을 모두 지움</button>
    <button type="submit">등록하기, 해당 클릭된 버튼이 소속된 form의 onSubmit에 바인딩된 함수가 실행됨</button> // 기본값
    <button type="button" onClick={onCLick}>form의 onSubmit이 실행되는 것을 말고 이 버튼의 onClick 함수만 실행됨</button>
*/

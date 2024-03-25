import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormErrorMessage } from "./02-afterStyle";
import { schema } from "./02-after.validation";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };

  // 여기도 입력해줘야 useForm의 resolver에 error가 해결됨
  email: string;
  password: string;
  phone: string;
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    // yupResolver()의 argument로 검증할 조건을 넣으면 된다.
    resolver: yupResolver(schema),
    // 이 검증 조건을 언제 할 것인지 알려줘야한다. 즉, onClick이나 onChange를 할 때 등 언제 검증을 해줄 것인지 mode라는 속성으로 알려주면 됨, onChange라고 해주면 입력을 하나하나할 때마다 검증을 해주는 것
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <Input01 type="text" register={register("writer")} />
      <FormErrorMessage>formState.errors.writer?.message</FormErrorMessage>
      제목: <Input01 type="text" register={register("title")} />
      <FormErrorMessage>formState.errors.title?.message</FormErrorMessage>
      내용: <Input01 type="text" register={register("contents")} />
      <FormErrorMessage>formState.errors.contents?.message</FormErrorMessage>
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}

/*
    <button type="reset">해당 form안의 input들의 내용을 모두 지움</button>
    <button type="submit">등록하기, 해당 클릭된 버튼이 소속된 form의 onSubmit에 바인딩된 함수가 실행됨</button> // 기본값
    <button type="button" onClick={onCLick}>form의 onSubmit이 실행되는 것을 말고 이 버튼의 onClick 함수만 실행됨</button>
*/

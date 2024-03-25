import { UseFormRegisterReturn } from "react-hook-form"

interface IInputProps {
  // type 뒤에 물음표(?)를 줘서 선택적인 type으로 만들어주면 어떤 컴포넌트를 import해서 사용할 때 굳이 type(props로 넘기는 type을 말함)을 넘겨주지 않아도 된다. 즉, 컴포넌트에 type이란 것 자체를 작성해주지 않아도 된다. 그 대신 여기 해당 컴포넌트에서 props.type이 없을 경우의 기본값을 입력해주어야 한다.
  type?: "text" | "password"
  // register를 우리가 만든 것이 아니라 react-hook-form에서 type을 찾아야 한다. 만약 type이 없거나하는 라이브러리라면 따로만든 type라이브러리를 설치해서 사용하거나 그마저도 없다면 어쩔 수 없이 any 타입으로 명시해주어야 한다. 어떤 타입인지 보려면 02-after.tsx의 useForm에서 불러온 register가 아니라 JSX에서 register라는 속성명에 마우르를 올려보면 UseFormRegisterReturn<"writer"> 이런식으로 나오는데 UseFormRegisterReturn 를 명시해주면 된다. 여기서<"writer">는 왜 안쓰는지는 모르겠다.
  register: UseFormRegisterReturn
}

export default function Input01(props: any): JSX.Element {
  return <input type={props.type ?? "text"} {...props.register} />
}
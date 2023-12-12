import { ChangeEvent, MouseEvent } from "react"

export interface IBoardWriteProps {
  isEdit: boolean
  // data는 객체인데 내용을 어떻게 알고 타입을 명시하지?, GraphQL codegen을 알아야함
  data?: any
}

export interface IMyVariables {
  number: number
  writer?: string
  title?: string
  contents?: string
}

export interface IBoardWriteUIProps {
  onChangeInp: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: any;
  data?: any;
}
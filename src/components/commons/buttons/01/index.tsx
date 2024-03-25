import { FormButton } from "../../../../../pages/section24/24-03-common-components/02-afterStyle";

interface IButtonProps {
  title: string;
  isActive: boolean;
}

export default function Button01(props: IButtonProps) {
  return <FormButton isActive={props.isActive}>{props.title}</FormButton>
}

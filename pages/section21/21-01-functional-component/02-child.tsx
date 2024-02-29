interface IChildPageProps {
  count: number;
}

export default function ChildPage(props: IChildPageProps): JSX.Element {
  return <div>{props.count}</div>;
}

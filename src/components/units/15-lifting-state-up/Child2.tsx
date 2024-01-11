interface IChild2Props {
  count: number
  onClickCount: () => void
}

export default function Child2(props: IChild2Props): JSX.Element {
  return (
    <div>
      <div>자식2의 카운트: {props.count}</div>
      <button onClick={props.onClickCount}>up</button>
    </div>
  );
}
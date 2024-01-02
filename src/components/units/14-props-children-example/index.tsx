interface IExampleProps {
  children: JSX.Element
  school: string
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>Hello</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>Hi</div>
    </div>
  )
}

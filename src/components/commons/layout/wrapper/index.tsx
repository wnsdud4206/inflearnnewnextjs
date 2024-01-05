import styled from "@emotion/styled";

interface ILayoutWrapperProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  height: 500px;
  background-color: powderblue;
  display: flex;
`;

export default function LayoutWrapper(props: ILayoutWrapperProps): JSX.Element {
  return <Wrapper>{props.children}</Wrapper>;
}

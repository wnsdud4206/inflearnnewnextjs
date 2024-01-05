import styled from "@emotion/styled"

const Wrapper = styled.aside`
  width: 30%;
  background-color: orange;
`;

export default function LayoutSidebar(): JSX.Element {
  return (
    <Wrapper>Sidebar</Wrapper>
  )
}
import styled from "@emotion/styled";

export const FormErrorMessage = styled.div`
  color: red;
`;

export const FormButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

import styled from "@emotion/styled";

export const FormErrorMessage = styled.div`
  color: red;
`;

export const FormButton = styled.button<{ isValid: boolean }>`
  background-color: ${(props) => (props.isValid ? "yellow" : "")};
`;

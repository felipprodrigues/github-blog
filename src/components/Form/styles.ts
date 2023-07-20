import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > div {
    display: flex;
    justify-content: space-between;
    & > span:first-of-type {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: ${(props) => props.theme["font-xl"]};
    }
    & > span:last-of-type {
      color: ${(props) => props.theme["base-span"]};
      font-size: ${(props) => props.theme["font-m"]};
    }
  }
  & form {
    & input {
      padding: 0.75rem 1rem;
      width: 100%;
    }
  }
`;

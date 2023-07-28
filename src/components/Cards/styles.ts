import styled from "styled-components";

export const CardContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  & > a {
    display: flex;
    flex-direction: column;

    background-color: ${(props) => props.theme["base-post"]};
    border: 1px solid transparent;
    border-radius: 6px;
    text-decoration: none;

    padding: 1.5rem;
    gap: 1rem;

    transition: all 0.15s linear;

    &:hover {
      opacity: 0.9;
      border-color: ${(props) => props.theme["base-span"]};
    }

    & > div:first-of-type {
      display: flex;
      justify-content: space-between;

      h2 {
        max-width: 80%;
        width: 100%;
        color: ${(props) => props.theme["base-title"]};
        font-size: ${(props) => props.theme["font-xl"]};
      }

      span {
        color: ${(props) => props.theme["base-span"]};
        font-size: ${(props) => props.theme["font-s"]};
      }
    }

    & > div:last-of-type {
      p {
        color: ${(props) => props.theme["base-text"]};
        font-size: ${(props) => props.theme["font-m"]};
      }
    }
  }
`;

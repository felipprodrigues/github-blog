import styled from "styled-components";

export const ContentRef = styled.div`
  display: flex;
  justify-content: space-between;

  & > a {
    border-bottom: 1px solid transparent;
    transition: all 0.25s linear;

    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme["font-s"]};
    color: ${(props) => props.theme.blue};

    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.blue};
    }
  }

  & > a:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`;

export const ContentBody = styled.div`
  width: 100%;
  padding: 2rem;
  gap: 2rem;

  & > p {
    color: ${(props) => props.theme["base-text"]};
    font-size: ${(props) => props.theme["font-l"]};
    display: grid;
    gap: 0.75rem;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }
  }

  & img {
    width: 100%;
  }
`;

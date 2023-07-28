import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-profile"]};
  margin-top: -6rem;

  padding: 2rem;
  gap: 2rem;

  & > img {
    height: 150px;
    width: 150px;

    border-radius: 6px;
    border: none;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;

  & > p {
    color: ${(props) => props.theme["base-text"]};
    font-size: ${(props) => props.theme["font-l"]};
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;

  & h2 {
    font-size: ${(props) => props.theme["font-xxl"]};
  }

  & > div {
    border-bottom: 1px solid transparent;
    transition: all 0.25s linear;

    a {
      text-decoration: none;
      vertical-align: center;
      display: flex;
      align-items: center;
      font-size: ${(props) => props.theme["font-s"]};
    }

    a,
    svg {
      color: ${(props) => props.theme.blue};
    }

    svg {
      margin-left: 0.5rem;
    }
  }

  & > div:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`;

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

export const ContentTags = styled.footer`
  display: flex;
  gap: 1.5rem;

  & > div {
    align-items: center;
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["base-label"]};
    }

    span {
      font-size: ${(props) => props.theme["font-l"]};
    }
  }
`;

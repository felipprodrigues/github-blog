import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  margin: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme["base-background"]};

  display: flex;
  flex-direction: column;

  div#main {
    width: 100%;

    @media (min-width: 1024px) {
      max-width: calc(100% - 40rem);
    }
    max-width: calc(100% - 6rem);
  }

  div#footer {
    padding: 2rem;
  }
`;

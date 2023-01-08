import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 90px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--color-white);
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 800px) {
    padding: none;
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;

    h1 {
      font-weight: var(--weight1);
      font-size: var(--text-size4);
      color: #a995e8;
    }
  }

  nav {
    display: flex;
    align-items: center;
  }
`;

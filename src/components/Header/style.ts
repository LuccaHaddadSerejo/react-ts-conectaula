import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 90px;
  margin: 0 auto;
`;

export const StyledHeader = styled.header`
  width: 90%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  
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

  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: 850px) {
    width: 60%;
  }

  @media (min-width: 1050px) {
    width: 80%;
  }
`;

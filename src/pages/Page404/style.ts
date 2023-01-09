import styled from "styled-components";

export const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > :nth-child(2) {
    width: 100%;
    padding: 0 30px;
    max-width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;

    @media (min-width: 1000px) {
      padding: none;
    }

    & > :nth-child(1) {
      width: 100%;
      display: flex;
      flex-direction: column;

      h1 {
        align-self: center;
        font-weight: 700;
        font-size: 52px;
        color: #e6828b;
      }

      p {
        font-weight: 700;
        font-size: 24px;
        color: #e6828b;

        @media (min-width: 800px) {
          font-size: 32px;
        }
      }
    }
    & > :nth-child(2) {
      width: 100%;
      display: flex;
      flex-direction: column;
      .linksPage404 {
        text-decoration: underline;

        :hover {
          color: var(--color-gray500);
        }
      }
      span {
        font-weight: 700;
        font-size: 22px;
        color: #66bce6;

        @media (min-width: 800px) {
          font-size: 22px;
        }
      }

      & > :nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 25px;

        font-weight: 700;
        font-size: 22px;
      }
    }
  }
`;

export const StyledWaveContainer = styled.div`
  width: 100%;
  min-height: 100%;
  & > :nth-child(1) {
    width: 100%;

    @media (min-width: 850px) {
      display: none;
    }
  }

  & > :nth-child(2) {
    display: none;

    @media (min-width: 850px) {
      width: 100%;
      display: block;
    }
  }
`;

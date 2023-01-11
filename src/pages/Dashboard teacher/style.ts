import styled from "styled-components";
import MainStyledContainer from "../../components/MainContainer/style";

export const StyledDashContainer = styled(MainStyledContainer)`
  background-image: none;
  background: linear-gradient(
    90deg,
    rgba(102, 188, 230, 1) 0%,
    rgba(169, 149, 232, 1) 100%
  );
`;

export const StyledContent = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  .h2Solicitation {
    color: var(--color-gray0);
  }

  .divDate {
    width: 100%;
    height: 100%;
    padding-left: 23px;
  }

  .divEdit {
    display: flex;
    justify-content: space-between;

    .h2Solicitation {
      color: var(--color-gray0);
    }

    .divDate {
      width: 100%;
      height: 100%;
      padding-left: 23px;

      ul {
        margin-top: 30px;
      }
    }

    .divEdit {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`

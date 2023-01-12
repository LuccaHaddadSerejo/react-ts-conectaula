import styled from "styled-components";
import registerPageImg from "../../assets/img/registerPageImg.svg";

const MainStyledContainer = styled.main`
  width: 100%;
  height: 100vh;
  padding: 30px 20px 0;

  & > div.imgDiv {
    height: 100%;
    display: none;
  }

  &,
  & > div.imgDiv {
    width: 100%;
    background: linear-gradient(
        90deg,
        rgba(102, 188, 230, 0.45) 0%,
        rgba(169, 149, 232, 0.45) 100%
      ),
      url(${registerPageImg});

    background-size: cover;
    background-position: center;
    object-fit: cover;
  }

  @media (min-width: 1000px) {
    height: 100vh;

    & {
      padding: 0;
      background-image: none;
      display: flex;
    }

    & > div.imgDiv {
      width: 50vw;
      display: inline-block;
    }
  }

  @media (min-width: 1100px) {
    & > div.imgDiv {
      width: 60vw;
    }
  }

  @media (min-width: 1400px) {
    /* max-width: 1400px; */
    margin: 0 auto;
    & > div.imgDiv {
      width: 65vw;
    }
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: 0 auto;
    & > div.imgDiv {
      width: 65vw;
    }
  }
`;

export default MainStyledContainer;

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
    & {
      background-image: none;
    }

    & > div.imgDiv {
      display: inline-block;
    }
  }
`;

export default MainStyledContainer;

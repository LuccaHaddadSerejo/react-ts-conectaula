import styled from "styled-components";
import MainStyledContainer from "../../components/MainContainer/style";
import registerPageImg2 from "../../assets/img/registerPageImg2.svg";
import StyledRegisterContainer from "../RegisterStudent/style";

export const StyledTeacherRegisterContainer = styled(MainStyledContainer)`
  background: none;
  background: linear-gradient(
      90deg,
      rgba(102, 188, 230, 0.45) 0%,
      rgba(169, 149, 232, 0.45) 100%
    ),
    url(${registerPageImg2}) no-repeat center;
  background-size: cover;

  & div.imgDiv {
    width: 50vw;
    background-image: url(${registerPageImg2});
  }

  @media (min-width: 1000px) {
    background: none;
  }
`;

export const StyledRegisterTeacher = styled(StyledRegisterContainer)`
  & h2 {
    margin: 10px 0;
    font-size: var(--title-size8);
    font-family: var(--font-family2);
  }

  & hr {
    margin: 10px 0;
  }

  @media (min-width: 1000px) {
    height: 100%;
    justify-content: center;

    & span {
      padding: 0;
    }
  }
`;

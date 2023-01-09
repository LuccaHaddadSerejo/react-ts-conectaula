import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import landingImg from "../../assets/img/landingImg.svg";
import { StyledLandingPage } from "./style";

const Landingpage = () => {
  return (
    <StyledLandingPage>
      <div className="landingContentContainer">
        <div className="landingContent">
          <img
            src={logo}
            alt="Logo com nome e uma imagem representando pessoas conectadas"
          />
          <p className="landingTitle">
            <span className="brandSpan">Aprenda</span> ou{" "}
            <span className="teachSpan">ensine</span> <br />
            de qualquer lugar do Brasil com o <br />
            <span className="brandSpan">ConectAulas</span>
          </p>
          <p className="landingParagraph">Cadastre-se como:</p>
          <div className="landingSelection">
            <Link to={"/register/student"} className="studentLink">
              Aluno
            </Link>
            <p className="landingParagraph">ou</p>
            <Link to={"/register/teacher"} className="teacherLink">
              Professor
            </Link>
          </div>
          <p className="landingParagraph">
            Já possui uma conta? Entre
            <span className="brandSpan">
              <Link to={"/login"}> aqui.</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="landingImg"></div>
    </StyledLandingPage>
  );
};

export default Landingpage;

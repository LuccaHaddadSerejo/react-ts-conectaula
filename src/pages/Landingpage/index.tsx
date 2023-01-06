import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import landingImg from "../../assets/img/landingImg.svg"
import { StyledLandingPage } from "./style";

const Landingpage = () => {
  return (
    <StyledLandingPage>
      <div className="dashboardContent">
        <img src={logo} alt="Logo com nome e uma imagem representando pessoas conectadas" />
        <p><span>Aprenda</span> ou <span>ensine</span> de qualquer lugar do Brasil com o <span>ConectAulas</span></p>
        <p>Escolha se você é professor ou aluno e cadastre-se!</p>
        <div className="dashboardSelection">
          <Link to={"/dashboard/student/:name"}>Aluno</Link>
          <Link to={"/dashboard/teacher/:name"}>Professor</Link>
        </div>
        <p>Já possui cadastro? Faça seu login <span><Link to={"/login"}>aqui</Link></span></p>
      </div>
      <div className="dashboardImg">
        <img src={landingImg} alt="Foto de estudante tendo aula pelo computador" />
      </div>
    </StyledLandingPage>
    
  );
};

export default Landingpage;

import React from "react";
import waveMobileTop from "../../assets/img/wavesMobile/wavePage404Top.svg";
import waveDesktopTop from "../../assets/img/wavesDesktop/wavePage404Top.svg";
import waveMobileBottom from "../../assets/img/wavesMobile/wavePage404Bottom.svg";
import waveDesktopBottom from "../../assets/img/wavesDesktop/wavePage404Bottom.svg";
import { StyledMain, StyledWaveContainer } from "./style";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <StyledMain>
      <StyledWaveContainer>
        <img src={waveMobileTop} alt="wave svg" />
        <img src={waveDesktopTop} alt="wave svg" />
      </StyledWaveContainer>
      <div>
        <div>
          <h1>Erro404</h1>
          <p>A página que você está procurando não existe.</p>
        </div>
        <div>
          <span>Ao invés disso, tente uma dessas:</span>
          <div>
            <Link className="linksPage404" to={"/"}>
              Ir para a Home
            </Link>
            <Link className="linksPage404" to={"/login"}>
              Ir para o Login
            </Link>
          </div>
        </div>
      </div>
      <StyledWaveContainer>
        <img src={waveMobileBottom} alt="wave svg" />
        <img src={waveDesktopBottom} alt="wave svg" />
      </StyledWaveContainer>
    </StyledMain>
  );
};

export default Page404;

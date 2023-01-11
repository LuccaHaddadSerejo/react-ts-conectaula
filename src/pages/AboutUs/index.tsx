import waveMobileTop from "../../assets/img/wavesMobile/wavePage404Top.svg";
import waveDesktopTop from "../../assets/img/wavesDesktop/wavePage404Top.svg";
import waveMobileBottom from "../../assets/img/wavesMobile/wavePage404Bottom.svg";
import waveDesktopBottom from "../../assets/img/wavesDesktop/wavePage404Bottom.svg";
import linkedinIcon from "../../assets/img/icons8-linkedin.svg"
import githubIcon from "../../assets/img/icons8-github.svg"
import isadoraPic from "../../assets/img/LinkedInprofilepic.jpeg"
import bryanPic from "../../assets/img/BryanPhoto.jpg"
import iarleyPic from "../../assets/img/IarleyPic.jpg"
import julianaPic from "../../assets/img/JulianaPic.jpg"
import luccaPic from "../../assets/img/luccaPErfil.jpeg"
import mateusPic from "../../assets/img/MateusPic.jpg"
import { StyledAboutContainer, StyledAboutTitle, StyledAboutUsList, StyledWaveContainer } from "./style";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
    <StyledAboutContainer>
      <StyledWaveContainer>
        <img src={waveMobileTop} alt="wave svg" className="waveMobile" />
        <img src={waveDesktopTop} alt="wave svg" className="waveDesk" />
      </StyledWaveContainer>
      <StyledAboutTitle>Quem somos</StyledAboutTitle>
      <StyledAboutUsList>
        <li className="member">
            <img src={isadoraPic} alt="Foto de perfil" className="memberPhoto" />
            <h2>Isadora Perdigão</h2>
            <div className="memberContact">
                <a href="https://www.linkedin.com/in/doris-perdig%C3%A3o/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Logo linkedIn" />
                </a>
                <a href="https://github.com/IsadoraPerdigao" target="_blank" rel="noreferrer" >
                    <img src={githubIcon} alt="" />
                </a>
            </div>
        </li>  
        <li className="member">
            <img src={bryanPic} alt="Foto de perfil" className="memberPhoto" />
            <h2>Bryan Batista</h2>
            <div className="memberContact">
                <a href="https://www.linkedin.com/in/buraio/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Logo linkedIn" />
                </a>
                <a href="https://github.com/Buraio" target="_blank" rel="noreferrer" >
                    <img src={githubIcon} alt="" />
                </a>
            </div>
        </li> 
        <li className="member">
            <img src={iarleyPic} alt="Foto de perfil" className="memberPhoto" />
            <h2>Iarley Cavalcante</h2>
            <div className="memberContact">
                <a href=" https://www.linkedin.com/in/iarley-lopes-b19100246/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Logo linkedIn" />
                </a>
                <a href="https://github.com/iarley1" target="_blank" rel="noreferrer" >
                    <img src={githubIcon} alt="" />
                </a>
            </div>
        </li> 
        <li className="member">
            <img src={julianaPic} alt="Foto de perfil" className="memberPhoto" />
            <h2>Juliana Airana</h2>
            <div className="memberContact">
                <a href="https://www.linkedin.com/in/juliana-airana-2b24aa204/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Logo linkedIn" />
                </a>
                <a href="https://github.com/julianairana" target="_blank" rel="noreferrer" >
                    <img src={githubIcon} alt="" />
                </a>
            </div>
        </li> 
        <li className="member">
            <img src={luccaPic} alt="Foto de perfil" className="memberPhoto" />
            <h2>Lucca Haddad</h2>
            <div className="memberContact">
                <a href="https://www.linkedin.com/in/lucca-haddad-serejo-9961aa23a/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Logo linkedIn" />
                </a>
                <a href="https://github.com/LuccaHaddadSerejo" target="_blank" rel="noreferrer" >
                    <img src={githubIcon} alt="" />
                </a>
            </div>
        </li> 
        <li className="member">
            <img src={mateusPic} alt="Foto de perfil" className="memberPhoto" />
            <h2>Mateus Pereira</h2>
            <div className="memberContact">
                <a href="https://www.linkedin.com/in/mateus-monteiro-581296246" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Logo linkedIn" />
                </a>
                <a href="https://github.com/Mateus-Mont" target="_blank" rel="noreferrer" >
                    <img src={githubIcon} alt="" />
                </a>
            </div>
        </li> 
      </StyledAboutUsList>
        <div className="goBackSection">
            <Link to="/">Início</Link>
            <Link to="/login">Login</Link>
        </div>
      <StyledWaveContainer>
        <img src={waveMobileBottom} alt="wave svg" className="waveMobile" />
        <img src={waveDesktopBottom} alt="wave svg" className="waveDesk" />
      </StyledWaveContainer>
    </StyledAboutContainer>
    )
}

export default AboutUs
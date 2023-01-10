import { StyledCard } from "./style";
import andreaStudent from "../../assets/img/andreaStudent.png";
import { Button } from "../Button";
import {iDatasStudent, } from "../../pages/Dashboard teacher"


export const CardStudent = ({OpenModalCardStudent}:iDatasStudent) => {
 
 
  
  return (
    <StyledCard>
      <div>
        <img src={andreaStudent} alt="Foto do estudante" />
      </div>
      <div className="dataUser">
        <h3>Nome</h3>
        <span>Email</span>
        <p>Matéria</p>
        <p className="messageStudent">
          Olá, eu gostaria de contratar o seu seviço, para reforçar...
        </p>
        <div className="containerButton">
          <Button buttonVariation="showMore" type={"button"} onClick={()=>OpenModalCardStudent(true)}>
            Mostrar mais
          </Button>
        </div>
      </div>
    </StyledCard>
  );
};

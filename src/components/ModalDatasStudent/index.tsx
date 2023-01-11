import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import { StyledCardOpenModal, StyledModalStudentContent } from "./style";
import AlunoModal from "../../assets/img/AlunoModal.jpg";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext"
import { imessageInfo } from "../CardStudent";

export const ModalDatasStudent = ({name,email,grades,message,title}:imessageInfo) => {

  const {setModalStudant}=useContext(UserContext)
  return (
    <StyledModalContainer>
      <StyledModalStudentContent>
        <header>
          <h3>Informações do aluno</h3>
          <Button
            type={"button"}
            buttonVariation="closeModal"
            onClick={() => setModalStudant(false)}
          >
            X
          </Button>
        </header>

        <ul>
          <StyledCardOpenModal>
            <div>
              <img src={AlunoModal} alt="Foto do estudante" />
            </div>
            <div className="dataUserModal">
              <h3>{name}</h3>
              <span>{email}</span>
              <span>{grades}</span>
              <h3>{title}</h3>
              
              <p className="messageStudentModal">
               {message}
              </p>
            </div>
          </StyledCardOpenModal>
        </ul>
        <div className="containerButtonModal">
          <Button
            buttonVariation="conclude"
            type={"button"}
            onClick={() => setModalStudant(false)}
          >
            Concluir
          </Button>
        </div>
      </StyledModalStudentContent>
    </StyledModalContainer>
  );
};

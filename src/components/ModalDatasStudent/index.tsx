import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import { StyledCardOpenModal, StyledModalStudentContent } from "./style";
import AlunoModal from "../../assets/img/AlunoModal.jpg";
import { iDatasStudent } from "../../pages/Dashboard teacher";

export const ModalDatasStudent = ({ OpenModalCardStudent }: iDatasStudent) => {
  return (
    <StyledModalContainer>
      <StyledModalStudentContent>
        <header>
          <h3>Informações do aluno</h3>
          <Button
            type={"button"}
            buttonVariation="closeModal"
            onClick={() => OpenModalCardStudent(false)}
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
              <h3>Nome</h3>
              <span>Email</span>
              <p>Matéria</p>
              <p className="messageStudentModal">
                Olá, eu gostaria de contratar o seu seviço, para reforçar meu
                aprendizado em algumas matérias que estou com dificuldade em
                assimilar,sou dedicada e gosto muito de estudar, aguardo seu
                retorno
              </p>
            </div>
          </StyledCardOpenModal>
        </ul>
        <div className="containerButtonModal">
          <Button
            buttonVariation="conclude"
            type={"button"}
            onClick={() => OpenModalCardStudent(false)}
          >
            Concluir
          </Button>
        </div>
      </StyledModalStudentContent>
    </StyledModalContainer>
  );
};

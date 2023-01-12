import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import { StyledCardOpenModal, StyledModalStudentContent } from "./style";
import AlunoModal from "../../assets/img/AlunoModal.jpg";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const ModalDatasStudent = ({ data }: any) => {
  const { setModalStudant } = useContext(UserContext);
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
              <h3>{data.name}</h3>
              <span>{data.email}</span>
              <span>{data.grades}</span>
              <h3>{data.title}</h3>

              <p className="messageStudentModal">{data.message}</p>
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

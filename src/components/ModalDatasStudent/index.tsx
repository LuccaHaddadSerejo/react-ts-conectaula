import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import { StyledCardOpenModal, StyledModalStudentContent } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import avatarImgCard from "../../assets/img/avatarImgCard.gif";

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
              {!data.photo_url ? (
                <img src={avatarImgCard} alt="" className="imgAvatarCard" />
              ) : (
                <img src={data.photo_url} alt="" className="imgAvatarCard" />
              )}
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
            buttonVariation="concludeStudentMessage"
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

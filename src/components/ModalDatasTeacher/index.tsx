import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import {
  StyledCardOpenModal,
  StyledModalStudentContent,
} from "../ModalDatasStudent/style";
import AlunoModal from "../../assets/img/AlunoModal.jpg";
import { iModalEditProps } from "../../pages/Dashboard student";
import { Input } from "../Input";
import TextArea from "../TextArea";
import { Form } from "../Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iEditProfileStudent } from "../../contexts/userContext/types";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { iMessagesObj } from "../../services/api";
import { SubmitHandler } from "react-hook-form/dist/types";

export const ModalDatasTeacher = ({ OpenModalTeacher }: iModalEditProps) => {
  const { submitMessage, createMessage, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iMessagesObj>({});

  const submitMessageTeacher: SubmitHandler<iMessagesObj> = (data) => {
    const userToken = localStorage.getItem("@TOKEN");
    console.log(data);
    createMessage(data, userToken);
  };

  return (
    <StyledModalContainer>
      <StyledModalStudentContent>
        <header>
          <h3>Informações do professor</h3>
          <Button
            type={"button"}
            buttonVariation="closeModal"
            onClick={() => OpenModalTeacher(false)}
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
        <Form onSubmit={handleSubmit(submitMessageTeacher)}>
          <Input
            type={"hidden"}
            id={""}
            defaultValue={user?.name}
            register={register("name")}
          />
          <Input
            type={"hidden"}
            id={""}
            defaultValue={user?.email}
            register={register("email")}
          />
          <h3>Mensagem para o professor:</h3>
          <Input
            type={""}
            id={"title"}
            placeholder="Título"
            value={user?.title}
            register={register("title")}
          />
          <span>Mensagem</span>
          <TextArea
            id={""}
            value={user?.message}
            register={register("message")}
          />
          <div className="containerButtonModal">
            <Button
              buttonVariation="conclude"
              type={"submit"}
              // onClick={() => OpenModalCardStudent(false)}
            >
              Enviar Mensagem
            </Button>
          </div>
        </Form>
      </StyledModalStudentContent>
    </StyledModalContainer>
  );
};

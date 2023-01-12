import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import {
  StyledCardOpenModal,
  StyledModalStudentContent,
} from "../ModalDatasStudent/style";
import { Input } from "../Input";
import TextArea from "../TextArea";
import { Form } from "../Form";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { iMessagesObj } from "../../services/api";
import { SubmitHandler } from "react-hook-form/dist/types";
export interface iUserDataTeacher {
  age: number;
  bio: string;
  email: string;
  grades: string;
  id: number;
  name: string;
  photo_url: string;
  school_year_preference: string[];
  type: string;
}
export interface iTeacher {
  userProps?: iUserDataTeacher;
  CloseModalTeacher: any;
  OpenModalTeacher: () => void;
}

export const ModalDatasTeacher = ({ CloseModalTeacher, userProps }: any) => {
  const { createMessage, user, modalLoading, setModalLoading, globalLoading } =
    useContext(UserContext);

  const { register, handleSubmit } = useForm<iMessagesObj>({});

  const submitMessageTeacher: SubmitHandler<iMessagesObj> = (data) => {
    createMessage(data);
  };

  if (!modalLoading) {
    CloseModalTeacher();
    setModalLoading(true);
  }

  return (
    <StyledModalContainer>
      <StyledModalStudentContent>
        <header>
          <h3>Informações do professor</h3>
          <Button
            type={"button"}
            buttonVariation="closeModal"
            onClick={CloseModalTeacher}
          >
            X
          </Button>
        </header>

        <ul>
          <StyledCardOpenModal>
            <div>
              <img src={userProps.photo_url} alt="Foto do professor" />
            </div>
            <div className="dataUserModal">
              <h3>{userProps.name}</h3>
              <span>{userProps.email}</span>
              <p>{userProps.grades.join(", ")}</p>
              <p className="messageStudentModal">{userProps.bio}</p>
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
            defaultValue={user?.id}
            register={register("userId")}
          />
          <Input
            type={"hidden"}
            id={""}
            defaultValue={userProps.id}
            register={register("teacher_id")}
          />
          <Input
            type={"hidden"}
            id={""}
            defaultValue={user?.email}
            register={register("email")}
          />
          <Input
            type={"hidden"}
            id={""}
            defaultValue={userProps.grades}
            register={register("grades")}
          />
          <h3>Mensagem para o professor:</h3>
          <Input
            type={""}
            id={"title"}
            placeholder="Título"
            value={user?.title}
            register={register("title")}
            hidden={true}
          />
          <TextArea
            id={"messageTextArea"}
            value={user?.message}
            register={register("message")}
            label="Mensagem"
          />
          <div className="containerButtonModal">
            <Button buttonVariation="concludeStudentMessage" type={"submit"}>
              {!globalLoading ? "Enviar Mensagem" : "Enviando..."}
            </Button>
          </div>
        </Form>
      </StyledModalStudentContent>
    </StyledModalContainer>
  );
};

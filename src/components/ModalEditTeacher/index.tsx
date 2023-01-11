import { Form } from "../Form";
import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import { StyledModalContent } from "./style";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { iEditProps } from "../../pages/Dashboard teacher";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalEditTeacherSchema } from "./modalEditTeacherSchema";
import { iEditProfileTeacher } from "../../contexts/userContext/types";

export const ModalEditTeacher = ({ OpenModal }: iEditProps) => {
  const { user, editProfile, globalLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditProfileTeacher>({
    mode: "onBlur",
    resolver: yupResolver(modalEditTeacherSchema),
  });

  const submit: SubmitHandler<iEditProfileTeacher> = (data) => {
    const userId = localStorage.getItem("@USERID");
    editProfile(data, userId);
  };

  const submitForm = (data: iEditProfileTeacher) => {
    submit(data);
    setTimeout(() => {
      OpenModal(false);
    }, 2500);
  };

  return (
    <StyledModalContainer>
      <StyledModalContent>
        <header>
          <h3>Editar Perfil</h3>
          <Button
            type={"button"}
            buttonVariation="closeModal"
            onClick={() => OpenModal(false)}
          >
            X
          </Button>
        </header>
        <Form onSubmit={handleSubmit(submitForm)}>
          <div className="inputDiv">
            <Input
              id="imgInput"
              type="link"
              placeholder="Foto"
              defaultValue={user?.photo_url}
              register={register("photo_url")}
            />
            {errors.photo_url?.message && (
              <span>{errors.photo_url.message}</span>
            )}
            <Input
              id="emailInput"
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              register={register("email")}
            />
            {errors.email?.message && <span>{errors.email.message}</span>}
            <Input
              id="passwordInput"
              type="password"
              placeholder="Senha"
              register={register("password")}
            />
            {errors.password?.message && <span>{errors.password.message}</span>}
            <Input
              id="confirmPasswordInput"
              type="password"
              placeholder="Confirmar senha"
              register={register("confirm_password")}
            />
          </div>
          {errors.confirm_password?.message && (
            <span>{errors.confirm_password.message}</span>
          )}
          <TextArea
            id="teacherBio"
            defaultValue={user?.bio}
            register={register("bio")}
            label="Biografia"
          />
          {errors.bio?.message && <span>{errors.bio.message}</span>}
          <div className="divButton">
            <Button
              type={"button"}
              buttonVariation="cancelEditions"
              onClick={() => OpenModal(false)}
            >
              Cancelar
            </Button>
            <Button
              type={"submit"}
              disabled={globalLoading}
              buttonVariation="saveEditions"
            >
              {globalLoading ? "Salvando..." : "Salvar alterações"}
            </Button>
          </div>
        </Form>
      </StyledModalContent>
    </StyledModalContainer>
  );
};

import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledModalContainer } from "../ModalContainer/style";
import { StyledModalContent } from "../ModalEditTeacher/style";
import { Button } from "../Button";
import { Input } from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalEditStudentSchema } from "./modalEditStudentSchema";
import { iEditProfileStudent } from "../../contexts/userContext/types";
import { iEditStudentProps } from "../../pages/Dashboard student";
import { Form } from "../Form";


export const ModalEditStudent = ({ OpenModalStudent }: iEditStudentProps) => {

    const { user, editProfile, globalLoading } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<iEditProfileStudent>({
        mode: "onBlur",
        resolver: yupResolver(modalEditStudentSchema),
      });

      const submit: SubmitHandler<iEditProfileStudent> = (data) => {
        const userId = localStorage.getItem("@USERID");
        editProfile(data, userId);
      };

      const submitForm = (data: iEditProfileStudent) => {
        submit(data);
        setTimeout(() => {
          OpenModalStudent(false);
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
              onClick={() => OpenModalStudent(false)}
            >
              X
            </Button>
          </header>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              id="imgInput"
              type="link"
              placeholder="Foto"
              defaultValue={user?.photo_url}
              register={register("photo_url")}
            />
            {errors.photo_url?.message && <span>{errors.photo_url.message}</span>}
            <Input
            id={"studentAge"}
            hidden={true}
            label={"Idade"}
            type={"number"}
            defaultValue={user?.age}
            register={register("age")}
            placeholder={"Idade"}
          />
          {errors.age?.message && <span>{errors.age.message}</span>}
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
            {errors.confirm_password?.message && (
              <span>{errors.confirm_password.message}</span>
            )}
            <div className="divButton">
              <Button
                type={"button"}
                buttonVariation="cancelEditions"
                onClick={() => OpenModalStudent(false)}
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
    )
}
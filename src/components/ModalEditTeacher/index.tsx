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


export const ModalEditTeacher = ({OpenModal}:iEditProps) => {

    const {user, editProfile} = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<iEditProfileTeacher>({
        mode: "onBlur",
        resolver: yupResolver(modalEditTeacherSchema),
      });

      const submit: SubmitHandler<iEditProfileTeacher> = (data, id) => {
          const userId = localStorage.getItem("@USERID");
          editProfile(data, userId);
      }
     
    return (
        <StyledModalContainer>
            <StyledModalContent>
                <header>
                    <h3>Editar Perfil</h3>
                    <Button type={"button"} buttonVariation="closeModal" onClick={() => OpenModal(false)}>X</Button>
                </header>
                <Form onSubmit={handleSubmit(submit)}>
                    <Input id="imgInput" type="link" placeholder="Foto" defaultValue={user?.photo_url} register={register("photo_url")}/>
                    {errors.photo_url?.message && <p>{errors.photo_url.message}</p>}
                    <Input id="emailInput" type="email" placeholder="Email" defaultValue={user?.email}  register={register("email")}/>
                    {errors.email?.message && <p>{errors.email.message}</p>}
                    <Input id="passwordInput" type="password" placeholder="Senha"  register={register("password")}/>
                    {errors.password?.message && <p>{errors.password.message}</p>}
                    <Input id="confirmPasswordInput" type="password" placeholder="Confirmar senha" register={register("confirm_password")}/>
                    {errors.confirm_password?.message && ( <p>{errors.confirm_password.message}</p>)}
                    <label htmlFor="teacherBio" className="labelInput">Biografia</label>
                    <TextArea id="teacherBio" defaultValue={user?.bio} register={register("bio")}/>
                    {errors.bio?.message && <p>{errors.bio.message}</p>}
                    <div className="divButton">
                    <Button type={"button"} buttonVariation="cancelEditions" onClick={() => OpenModal(false)}>Cancelar</Button>
                    <Button type={"submit"} buttonVariation="saveEditions">Salvar alterações</Button>
                    </div>
                </Form>
        
            </StyledModalContent>
        </StyledModalContainer>
    )
}
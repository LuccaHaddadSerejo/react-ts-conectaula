import { Form } from "../Form";
import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import { StyledModalContent } from "./style";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { iEditProps } from "../../pages/Dashboard teacher";

export const ModalEditTeacher = ({OpenModal}:iEditProps) => {
    return (
        <StyledModalContainer>
            <StyledModalContent>
                <header>
                    <h3>Editar Perfil</h3>
                    <Button type={"button"} buttonVariation="closeModal" onClick={() => OpenModal(false)}>X</Button>
                </header>
                <Form>
                    <Input id="imgInput" type="link" placeholder="Foto"/>
                    <Input id="emailInput" type="email" placeholder="Email"/>
                    <Input id="passwordInput" type="password" placeholder="Senha"/>
                    <Input id="confirmPasswordInput" type="password" placeholder="Confirmar senha"/>
                    <label htmlFor="teacherBio" className="labelInput">Biografia</label>
                    <TextArea id="teacherBio"/>
                    <div className="divButton">
                    <Button type={"button"} buttonVariation="cancelEditions" onClick={() => OpenModal(false)}>Cancelar</Button>
                    <Button type={"button"} buttonVariation="saveEditions">Salvar alterações</Button>
                    </div>
                </Form>
        
            </StyledModalContent>
        </StyledModalContainer>
    )
}
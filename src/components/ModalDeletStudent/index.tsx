import { useContext } from "react";
import { Button } from "../Button";
import { StyledModalContainer } from "../ModalContainer/style";
import { UserContext } from "../../contexts/userContext";
import { StyledModalContentDelet } from "./style";

export const ModalDelet = ({closeModal}:any) => {

    const {deleteUser} = useContext(UserContext)

    const userDelete = () => {
        const userId = (localStorage.getItem("@USERID"))
        deleteUser(userId)
        console.log(typeof userId)

    }
    
    return (
        <StyledModalContainer>
            <StyledModalContentDelet>
                <header>
                <h3>Deseja mesmo exluir sua conta?</h3>
            <Button type={"button"} onClick={closeModal} buttonVariation="closeModal">X</Button>

                </header>
                <div className="divButton">
                <Button type={"button"} onClick={closeModal} buttonVariation="cancelEditions">Cancelar</Button>
                <Button type={"button"} onClick={userDelete} buttonVariation="deletUser">Confirmar</Button>
                </div>
            </StyledModalContentDelet>
        </StyledModalContainer>
    )
}
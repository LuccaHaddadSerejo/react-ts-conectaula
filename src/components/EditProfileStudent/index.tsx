import { useContext, useState } from "react";
import { StyledEditProfile } from "../EditProfileTeacher/style"
import { UserContext } from "../../contexts/userContext";
import { Button } from "../Button";
import editIcon from "../../assets/img/edit.svg";
import trash from "../../assets/img/trash.svg";
import { ModalDelet } from "../ModalDeletStudent";
import { iModalEditProps } from "../../pages/Dashboard student";


const EditProfileStudent = ({ OpenModalStudent }: iModalEditProps) => {

    const {user} = useContext(UserContext);
    const [modalDeletStudent, setModalDeletStudent] = useState(false);


    const openModal = () => {
        setModalDeletStudent(true)
    }

    const closeModal = () => {
        setModalDeletStudent(false)
    }

    return (
        <>
        
        <StyledEditProfile>
        <img src={user?.photo_url} alt="Foto de perfil" className="imgProfile"/>
        <h2>{user?.name}</h2>
        <p>Aluno</p>
        <div className="divButton">
        <Button type={"button"} onClick={() => OpenModalStudent(true)}>Perfil <span><img src={editIcon} alt=""></img></span></Button>
        <Button type={"button"}> <img src={trash} alt="" onClick={openModal}/></Button>
        </div>
        {modalDeletStudent && <ModalDelet closeModal={closeModal}/>}
        </StyledEditProfile>
        </>
    )
};

export default EditProfileStudent;

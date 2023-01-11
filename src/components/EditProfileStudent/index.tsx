import { useContext, useState } from "react";
import { StyledEditProfile } from "../EditProfileTeacher/style"
import { UserContext } from "../../contexts/userContext";
import { Button } from "../Button";
import editIcon from "../../assets/img/edit.svg";
import { iEditStudentProps } from "../../pages/Dashboard student";
import trash from "../../assets/img/trash.svg"
import { ModalDelet } from "../ModalDelet";


const EditProfileStudent = ({OpenModalStudent}:iEditStudentProps) => {

    const {user} = useContext(UserContext);
    const [modalDeletStudent, setModalDeletStudent] = useState(false);

    console.log(user)

    const openModal = () => {
        setModalDeletStudent(true)
    }

    const closeModal = () => {
        setModalDeletStudent(false)
    }

    return (
        <>
        {modalDeletStudent && <ModalDelet closeModal={closeModal}/>}
        <StyledEditProfile>
        
        <img src={user?.photo_url} alt="Foto de perfil" className="imgProfile"/>
        <h2>{user?.name}</h2>
        <p>Aluno</p>
        <div className="divButton">
        <Button type={"button"} onClick={() => OpenModalStudent(true)}>Perfil <span><img src={editIcon} alt=""></img></span></Button>
        <Button type={"button"}> <img src={trash} alt="" onClick={openModal}/></Button>
        </div>
        </StyledEditProfile>
        </>
    )
}

export default EditProfileStudent;
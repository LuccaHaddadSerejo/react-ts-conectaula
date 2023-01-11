import { useContext, useState } from "react";
import { StyledEditProfile } from "../EditProfileTeacher/style";
import { UserContext } from "../../contexts/userContext";
import { Button } from "../Button";
import editIcon from "../../assets/img/edit.svg";
import trash from "../../assets/img/trash.svg";
import { ModalDeletStudent } from "../ModalDeletStudent";
import { iModalEditProps } from "../../pages/Dashboard student";
import avatar from "../../assets/img/avatar.png";

const EditProfileStudent = ({ OpenModalStudent }: iModalEditProps) => {
  const { user } = useContext(UserContext);
  const [modalDeletStudent, setModalDeletStudent] = useState(false);

  const openModal = () => {
    setModalDeletStudent(true);
  };

  const closeModal = () => {
    setModalDeletStudent(false);
  };

  return (
    <>
      <StyledEditProfile>
        {!user?.photo_url ? (
          <img src={avatar} alt="" className="imgProfile" />
        ) : (
          <img src={user?.photo_url} alt="" className="imgProfile" />
        )}
        <h2>{user?.name}</h2>
        <p>Aluno</p>
        <div className="divButton">
          <Button type={"button"} onClick={() => OpenModalStudent(true)}>
            Perfil{" "}
            <span>
              <img src={editIcon} alt=""></img>
            </span>
          </Button>
          <Button type={"button"}>
            {" "}
            <img src={trash} alt="" onClick={openModal} />
          </Button>
        </div>
        {modalDeletStudent && <ModalDeletStudent closeModal={closeModal} />}
      </StyledEditProfile>
    </>
  );
};

export default EditProfileStudent;

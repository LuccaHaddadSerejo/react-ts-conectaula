import React, { useContext, useState } from "react";
import { StyledEditProfile } from "./style";
import { Button } from "../Button";
import { iEditProps } from "../../pages/Dashboard teacher";
import editIcon from "../../assets/img/edit.svg";
import { UserContext } from "../../contexts/userContext";
import trash from "../../assets/img/trash.svg";
import { ModalDeletTeacher } from "../ModalDeletTeacher";

const EditProfileTeacher = ({ OpenModal }: iEditProps) => {
  const { user } = useContext(UserContext);
  const [modalDeletTeacher, setModalDeletTeacher] = useState(false);

  const openModal = () => {
    setModalDeletTeacher(true);
  };

  const closeModal = () => {
    setModalDeletTeacher(false);
  };

  return (
    <StyledEditProfile>
      <img src={user?.photo_url} alt="Foto de perfil" className="imgProfile" />
      <h2>{user?.name}</h2>
      <p>Professor</p>
      <div className="divButton">
        <Button type={"button"} onClick={() => OpenModal(true)}>
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
      {modalDeletTeacher && <ModalDeletTeacher closeModal={closeModal} />}
    </StyledEditProfile>
  );
};

export default EditProfileTeacher;

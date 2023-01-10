import React, { useContext } from "react";
import { StyledEditProfile } from "./style";
import { Button } from "../Button";
import { iEditProps } from "../../pages/Dashboard teacher";
import editIcon from "../../assets/img/edit.svg";
import { UserContext } from "../../contexts/userContext";



const EditProfileTeacher = ({OpenModal}:iEditProps) => {  

   const {user} = useContext(UserContext);
   console.log(user)

    return (
        <StyledEditProfile>
        <img src={user?.photo_url} alt="Foto de perfil" className="imgProfile"/>
        <h2>{user?.name}</h2>
        <p>Professor</p>
        <Button type={"button"} onClick={() => OpenModal(true)}>Perfil <span><img src={editIcon} alt=""></img></span></Button>
        </StyledEditProfile>
    )
};

export default EditProfileTeacher;
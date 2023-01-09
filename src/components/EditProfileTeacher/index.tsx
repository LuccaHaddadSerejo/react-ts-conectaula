import React from "react";
import { StyledEditProfile } from "./style";
import imgProfile from"../../assets/img/imgProfile.svg";
import { Button } from "../Button";
import { iEditProps } from "../../pages/Dashboard teacher";
import editIcon from "../../assets/img/edit.svg";


const EditProfileTeacher = ({OpenModal}:iEditProps) => {  
    console.log(OpenModal) 
    return (
        <StyledEditProfile>
        <img src={imgProfile} alt="" />
        <h2>Roberta Silva</h2>
        <p>Professor</p>
        <Button type={"button"} onClick={() => OpenModal(true)}>Perfil <span><img src={editIcon} alt=""></img></span></Button>
        </StyledEditProfile>
    )
};

export default EditProfileTeacher;
import React from "react";
import { StyledEditProfile } from "./style";
import imgProfile from"../../assets/img/imgProfile.svg";
import { Button } from "../Button";

const EditProfileTeacher = () => {
    return (
        <StyledEditProfile>
        <img src={imgProfile} alt="" />
        <h2>Roberta Silva</h2>
        <p>Professor</p>
        <Button type={"button"}>Perfil</Button>
        </StyledEditProfile>
    )
};

export default EditProfileTeacher;
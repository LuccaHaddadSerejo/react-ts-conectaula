import React, { useState } from "react";
import { EditPreferencesTeacher } from "../../components/EditPreferencesTeacher";
import EditProfileTeacher from "../../components/EditProfileTeacher";
import Header from "../../components/Header";
import MainStyledContainer from "../../components/MainContainer/style";
import { StyledContent } from "./style";
import { ModalEditTeacher } from "../../components/ModalEditTeacher";

export interface iModalProps {
  OpenModal: (boolean: boolean) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

export interface iEditProps {
  OpenModal: (boolean: boolean) => void;
}

const DashBoardTeacher = () => {
  const [modalIsOpen, setModalIsOpen] = useState<iModalProps | boolean>(false);

  const OpenModal = (boolean: boolean) => {
    setModalIsOpen(boolean)
  }

  return (
    <>

    {
      modalIsOpen === true && 
    <ModalEditTeacher OpenModal={OpenModal}/>
    }
      <Header/>
      <MainStyledContainer>
      <StyledContent>
        <div className="divDate">
          <h2 className="h2Solicitation">Solicitações de alunos</h2>
          <p>filtro</p>
          <p>card</p> 
        </div>
        <div className="divEdit">
      <EditProfileTeacher OpenModal={OpenModal}/>
      <EditPreferencesTeacher />
        </div>
      </StyledContent>
      </MainStyledContainer>
    </>
  ) 


};

export default DashBoardTeacher;

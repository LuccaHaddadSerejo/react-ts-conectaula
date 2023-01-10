import React, { useState } from "react";
import { EditPreferencesTeacher } from "../../components/EditPreferencesTeacher";
import EditProfileTeacher from "../../components/EditProfileTeacher";
import Header from "../../components/Header";
import MainStyledContainer from "../../components/MainContainer/style";
import { StyledContent } from "./style";
import { ModalEditTeacher } from "../../components/ModalEditTeacher";
import GradeFilter from "../../components/GradeFilter";
import { CardStudent } from "../../components/CardStudent";
import { ModalDatasStudent } from "../../components/ModalDatasStudent";

export interface iModalProps {
  OpenModal: (boolean: boolean) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
  OpenModalCardStudent: (boolean: boolean) => void;
  modalCardOpen: boolean;
}

export interface iEditProps {
  OpenModal: (boolean: boolean) => void;
}
export interface iDatasStudent {
  OpenModalCardStudent: (boolean: boolean) => void;
}

const DashBoardTeacher = () => {
  const [modalIsOpen, setModalIsOpen] = useState<iModalProps | boolean>(false);
  const [modalCardOpen, setModalCard] = useState<iModalProps | boolean>(false);

  const OpenModal = (boolean: boolean) => {
    setModalIsOpen(boolean);
  };

  const OpenModalCardStudent = (boolean: boolean) => {
    setModalCard(boolean);
  };

  return (
    <>
      {modalCardOpen === true && (
        <ModalDatasStudent OpenModalCardStudent={OpenModalCardStudent} />
      )}

      {modalIsOpen === true && <ModalEditTeacher OpenModal={OpenModal} />}
      <Header />
      <MainStyledContainer>
        <StyledContent>
          <div className="divDate">
            <h2 className="h2Solicitation">Solicitações de alunos</h2>
            <GradeFilter />
            <ul>
              <CardStudent OpenModalCardStudent={OpenModalCardStudent} />
            </ul>
          </div>
          <div className="divEdit">
            <EditProfileTeacher OpenModal={OpenModal} />
            <EditPreferencesTeacher />
          </div>
        </StyledContent>
      </MainStyledContainer>
    </>
  );
};

export default DashBoardTeacher;

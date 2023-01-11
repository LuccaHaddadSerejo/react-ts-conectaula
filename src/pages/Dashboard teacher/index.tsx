import React, { useContext, useEffect, useState } from "react";
import { EditPreferencesTeacher } from "../../components/EditPreferencesTeacher";
import EditProfileTeacher from "../../components/EditProfileTeacher";
import Header from "../../components/Header";
import MainStyledContainer from "../../components/MainContainer/style";
import { StyledContent } from "./style";
import { ModalEditTeacher } from "../../components/ModalEditTeacher";
import GradeFilter from "../../components/GradeFilter";
import { CardStudent } from "../../components/CardStudent";
import { ModalDatasStudent } from "../../components/ModalDatasStudent";
import { getAllMessages, iMessagesObj } from "../../services/api";
import { UserContext } from "../../contexts/userContext";

export interface iModalProps {
  OpenModal: (boolean: boolean) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
  OpenModalCardStudent: (boolean: boolean) => void;
  modalCardOpen: boolean;
  OpenModalStudent: (boolean: boolean) => void;
  modalStudentIsOpen: boolean;
  setModalStudentIsOpen: (value: boolean) => void;
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

  const { studentMessage, setStudentMessage } = useContext(UserContext);

  const OpenModal = (boolean: boolean) => {
    setModalIsOpen(boolean);
  };

  const OpenModalCardStudent = (boolean: boolean) => {
    setModalCard(boolean);
  };

  useEffect(() => {
    const fillterMessages = async () => {
      const idTeste = localStorage.getItem("@USERID");
      const teste = await getAllMessages();

      const filtrado = teste?.filter((elem) => {
        const idString = elem.teacher_id.toString();
        return idTeste === idString;
      });
      console.log(filtrado);
      if (filtrado) {
        setStudentMessage(filtrado);
      }
    };
    fillterMessages();
  }, []);


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
              {studentMessage.map((elem) => (
                <CardStudent
                 
                />
              ))}
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

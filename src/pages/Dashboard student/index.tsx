import React, { useState } from "react";
import EditProfileStudent from "../../components/EditProfileStudent";
import { iModalProps } from "../Dashboard teacher";
import { ModalEditStudent } from "../../components/ModalEditStudent";
import Header from "../../components/Header";
import MainStyledContainer from "../../components/MainContainer/style";
import { StyledContent } from "../Dashboard teacher/style";
import GradeFilter from "../../components/GradeFilter";
import { ModalDatasTeacher } from "../../components/ModalDatasTeacher";
import { Button } from "../../components/Button";
import { EditPreferencesStudent } from "../../components/EditPreferencesStudent";
import { AvailableTeachersList } from "../../components/AvailableTeachersList";


export interface iModalEditProps {
  OpenModalStudent: (boolean: boolean) => void;
  OpenModalTeacher: (boolean: boolean) => void;
}

const DashboardStudent = () => {
  const [modalStudentIsOpen, setModalStudentIsOpen] = useState<
    iModalProps | boolean
  >(false);
  /*const [modalCardTeacherOpen, setModalCardTeacherOpen] = useState<
    iModalProps | boolean
  >(false);*/

  const OpenModalStudent = (boolean: boolean) => {
    setModalStudentIsOpen(boolean);

  };

  /*const OpenModalTeacher = (boolean: boolean) => {
    setModalCardTeacherOpen(boolean);

  };*/

  return (
    <>
      {modalStudentIsOpen === true && (
        <ModalEditStudent
          OpenModalStudent={OpenModalStudent}
          OpenModalTeacher={function (boolean: boolean): void {}}
        />
      )}
      {/*modalCardTeacherOpen === true && (
        <ModalDatasTeacher
          OpenModalTeacher={OpenModalTeacher}
          OpenModalStudent={function (boolean: boolean): void {}}
        />
      )*/}
      <Header />
      <MainStyledContainer>
        <StyledContent>
          <div className="divDate">
            <h2 className="h2Solicitation">Solicitações de alunos</h2>
            <GradeFilter />
            <AvailableTeachersList />
          </div>
          <div className="divEdit">
            <EditProfileStudent
              OpenModalStudent={OpenModalStudent}
              OpenModalTeacher={function (boolean: boolean): void {}}
            />
            <EditPreferencesStudent/>
          </div>
        </StyledContent>
      </MainStyledContainer>

    </>
  );
};

export default DashboardStudent;

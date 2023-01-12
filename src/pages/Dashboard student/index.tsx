import React, { useState } from "react";
import EditProfileStudent from "../../components/EditProfileStudent";
import { iModalProps } from "../Dashboard teacher";
import { ModalEditStudent } from "../../components/ModalEditStudent";
import Header from "../../components/Header";
import { StyledContent } from "../Dashboard teacher/style";
import GradeFilter from "../../components/GradeFilter";
// import { ModalDatasTeacher } from "../../components/ModalDatasTeacher";
// import { Button } from "../../components/Button";
import { EditPreferencesStudent } from "../../components/EditPreferencesStudent";
import { AvailableTeachersList } from "../../components/AvailableTeachersList";
import { StyledDashContainer } from "./style";

export interface iModalEditProps {
  OpenModalStudent: (boolean: boolean) => void;
  OpenModalTeacher: (boolean: boolean) => void;
  CloseModalTeacher: (boolean: boolean) => void;
}

const DashboardStudent = () => {
  const [modalStudentIsOpen, setModalStudentIsOpen] = useState<
    iModalProps | boolean
  >(false);

  const OpenModalStudent = (boolean: boolean) => {
    setModalStudentIsOpen(boolean);
  };

  return (
    <>
      {modalStudentIsOpen === true && (
        <ModalEditStudent
          OpenModalStudent={OpenModalStudent}
          OpenModalTeacher={function (boolean: boolean): void {}}
          CloseModalTeacher={function (): void {}}
        />
      )}

      <Header />
      <StyledDashContainer>
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
              CloseModalTeacher={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <EditPreferencesStudent />
          </div>
        </StyledContent>
      </StyledDashContainer>
    </>
  );
};

export default DashboardStudent;

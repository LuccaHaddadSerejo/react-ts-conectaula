import React, { useState } from "react";
import EditProfileStudent from "../../components/EditProfileStudent";
import { iModalProps } from "../Dashboard teacher";
import { ModalEditStudent } from "../../components/ModalEditStudent";
import { EditPreferencesStudent } from "../../components/EditPreferencesStudent";

export interface iEditStudentProps {
  OpenModalStudent: (boolean: boolean) => void;
}


const DashboardStudent = () => {
  const [modalStudentIsOpen, setModalStudentIsOpen] = useState<iModalProps | boolean>(false);

  const OpenModalStudent = (boolean: boolean) => {
    setModalStudentIsOpen(boolean);
  };

  return (
    <>
    {modalStudentIsOpen === true && <ModalEditStudent OpenModalStudent={OpenModalStudent} />}
    <EditProfileStudent OpenModalStudent={OpenModalStudent}/>
    <EditPreferencesStudent/>
    </>
  )

};

export default DashboardStudent;

import React, { useState } from "react";
import EditProfileStudent from "../../components/EditProfileStudent";
import { iModalProps } from "../Dashboard teacher";
import { ModalEditStudent } from "../../components/ModalEditStudent";

export interface iEditStudentProps {
  OpenModalStudent: (boolean: boolean) => void;
}


const DashboardStudent = () => {
  const [modalStudentIsOpen, setModalStudentIsOpen] = useState<iModalProps | boolean>(false);

  const OpenModalStudent = (boolean: boolean) => {
    setModalStudentIsOpen(boolean);
    console.log("aberto")
  };

  return (
    <>
    {modalStudentIsOpen === true && <ModalEditStudent OpenModalStudent={OpenModalStudent} />}
    <EditProfileStudent OpenModalStudent={OpenModalStudent}/>
    </>
  )

};

export default DashboardStudent;

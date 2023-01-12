import { Button } from "../Button"
import { StyledTeacherCard } from "./style"
import { iUserState } from "../../contexts/userContext/types";
import { useState } from "react";
import { iModalProps } from "../../pages/Dashboard teacher";
import { ModalDatasTeacher } from "../ModalDatasTeacher";

interface iTeacherCardProps {
  user: iUserState;
}

export const TeacherCard = ({ user }: iTeacherCardProps) => {
    const [modalCardTeacherOpen, setModalCardTeacherOpen] = useState(false);
  

  const OpenModalTeacher = () => {
    setModalCardTeacherOpen(true);
  };

  const CloseModalTeacher = () => {
    setModalCardTeacherOpen(false);
  };

  const teacherGrades = user.grades?.map((grade) => <li>{grade}</li>);

  return (
    <StyledTeacherCard>
      {modalCardTeacherOpen && (
        <ModalDatasTeacher 
         userProps={user}
          OpenModalTeacher={OpenModalTeacher}
          CloseModalTeacher={CloseModalTeacher}
        />
      )}

      <img src={user.photo_url} alt="foto do professor" />
      <div className="teacherInfo">
        <div className="teacherNameEmail">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <p>Matérias relacionadas:</p>
        <ul className="teacherGrades">{teacherGrades}</ul>
        <div className="teacherBio">
          <p>Biografia:</p>
          <p>{user.bio}</p>
        </div>
      </div>
      <Button
        type="button"
        buttonVariation="defaultRound"
        onClick={() => OpenModalTeacher()}
      >
        Mostrar mais
      </Button>
    </StyledTeacherCard>
  );
};


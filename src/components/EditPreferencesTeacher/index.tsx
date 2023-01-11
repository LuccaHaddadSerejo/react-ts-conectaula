import { Button } from "../Button";
import editIcon from "../../assets/img/edit.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledPrefTeacher } from "./style";
import { ModalTeacherPreferences } from "../ModalTeacherPreferences";

export const EditPreferencesTeacher = () => {
  const { user } = useContext(UserContext);

  const [modalTeacherPref, setModalTeacherPref] = useState(false);

  const openModal = () => {
    setModalTeacherPref(true);
  };

  const closeModal = () => {
    setModalTeacherPref(false);
  };

  return (
    <StyledPrefTeacher>
      <div className="editPrefTeacherHeader">
        <h2>Preferencias</h2>
        <Button
          onClick={openModal}
          buttonVariation="editPrefTeacher"
          type="button"
        >
          Editar <img src={editIcon} alt="" />
        </Button>
      </div>
      <div className="schoolYearPreference">
        <h3>Período Escolar</h3>
        <div>
          {user?.school_year_preference?.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </div>
      </div>
      <div className="prefGradeTeacher">
        <h3>Matérias</h3>
        <div>
          {user?.grades?.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </div>
      </div>
      {modalTeacherPref && <ModalTeacherPreferences closeModal={closeModal} />}
    </StyledPrefTeacher>
  );
};

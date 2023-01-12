import { Button } from "../Button";
import editIcon from "../../assets/img/edit.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledPrefStudent } from "./style";
import { ModalStudentPreferences } from "../ModalStudentPreferences";

export const EditPreferencesStudent = () => {
  const { user } = useContext(UserContext);

  const [modalStudentPref, setModalStudentPref] = useState(false);

  const openModal = () => {
    setModalStudentPref(true);
  };

  const closeModal = () => {
    setModalStudentPref(false);
  };

  return (
    <StyledPrefStudent>
      <div className="editPrefStudentHeader">
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
      <div className="prefGradeStudent">
        <h3>Matérias</h3>
        <div>
          {user?.grades?.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </div>
      </div>
      {modalStudentPref && <ModalStudentPreferences closeModal={closeModal} />}
    </StyledPrefStudent>
  );
};

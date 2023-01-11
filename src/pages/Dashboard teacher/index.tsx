import { useContext, useEffect, useState } from "react";
import { EditPreferencesTeacher } from "../../components/EditPreferencesTeacher";
import EditProfileTeacher from "../../components/EditProfileTeacher";
import Header from "../../components/Header";
import { StyledContent, StyledDashContainer } from "./style";
import { ModalEditTeacher } from "../../components/ModalEditTeacher";
import GradeFilter from "../../components/GradeFilter";
import { CardStudent } from "../../components/CardStudent";
import { ModalDatasStudent } from "../../components/ModalDatasStudent";
import { getAllMessages } from "../../services/api";
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
  const [modalCardOpen, setModalCard] = useState(false);


  const { studentMessage, setStudentMessage,modalStudant,setModalStudant } = useContext(UserContext);

  const OpenModal = (boolean: boolean) => {
    setModalIsOpen(boolean);
  };

  const OpenModalCardStudent = () => {
    setModalCard(true);
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

      {modalIsOpen === true && <ModalEditTeacher OpenModal={OpenModal} />}
      <Header />
      <StyledDashContainer>
        <StyledContent>
          <div className="divDate">
            <h2 className="h2Solicitation">Solicitações de alunos</h2>
            <GradeFilter />
            <ul>
              {studentMessage.map((elem) => (
                modalStudant ?  (  <ModalDatasStudent  message={elem.message} title={elem.title} email={elem.email} name={elem.name} grades={elem.grades}  />):(
                  <CardStudent  message={elem.message} title={elem.title} email={elem.email} name={elem.name} grades={elem.grades}  />
                )
                
              ))}
            </ul>
          </div>
          <div className="divEdit">
            <EditProfileTeacher OpenModal={OpenModal} />
            <EditPreferencesTeacher />
          </div>
        </StyledContent>
      </StyledDashContainer>
    </>
  );
};

export default DashBoardTeacher;

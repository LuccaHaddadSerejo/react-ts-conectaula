import { useContext, useEffect, useState } from "react";
import { EditPreferencesTeacher } from "../../components/EditPreferencesTeacher";
import EditProfileTeacher from "../../components/EditProfileTeacher";
import Header from "../../components/Header";
import MainStyledContainer from "../../components/MainContainer/style";
import { StyledContent, StyledDashContainer } from "./style";
import { ModalEditTeacher } from "../../components/ModalEditTeacher";
import GradeFilter from "../../components/GradeFilter";
import { CardStudent } from "../../components/CardStudent";
import { ModalDatasStudent } from "../../components/ModalDatasStudent";
import { getAllMessages, iMessagesObj } from "../../services/api";
import { UserContext } from "../../contexts/userContext";
import { GradesContext } from "../../contexts/gradesContext";

export interface iModalProps {
  OpenModal: (boolean: boolean) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
  OpenModalCardStudent: (boolean: boolean) => void;
  modalCardOpen: boolean;
  OpenModalStudent: (boolean: boolean) => void;
  modalStudentIsOpen: boolean;
  setModalStudentIsOpen: (value: boolean) => void;
  OpenModalTeacher:(value:boolean)=>void;
  setModalCardTeacherOpen:(value:boolean)=>void;
  
}

export interface iEditProps {
  OpenModal: (boolean: boolean) => void;
}
export interface iDatasStudent {
  OpenModalCardStudent: (boolean: boolean) => void;
}

const DashBoardTeacher = () => {
  const [modalIsOpen, setModalIsOpen] = useState<iModalProps | boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalCardOpen, setModalCard] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataStudent, setDataStudent] = useState<any>(null);
  const { studentMessage, setStudentMessage, modalStudant } = useContext(UserContext);
  const { grade } = useContext(GradesContext)

  const OpenModal = (boolean: boolean) => {
    setModalIsOpen(boolean);
  };
  console.log(studentMessage);

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
    
      if (filtrado) {
        setStudentMessage(filtrado);
      }
    };
    fillterMessages();
  }, []);

  const parseMessage = (studentMessageParam : iMessagesObj[]) => {
    return studentMessageParam.map(message => <CardStudent
      photo_url={message.photo_url}
      message={message.message}
      title={message.title}
      email={message.email}
      name={message.name}
      grades={message.grades}
      data={message}
      setDataStudent={setDataStudent}
    />)
  }

  const filteredMessagesByGrade = studentMessage.filter(message => message.grades === grade)
  const studentMessagesList = parseMessage(studentMessage)
  const filteredMessagesList = parseMessage(filteredMessagesByGrade)

  return (
    <>
      {modalIsOpen === true && <ModalEditTeacher OpenModal={OpenModal} />}
      {modalStudant && <ModalDatasStudent data={dataStudent} />}
      <Header />
      <StyledDashContainer>
        <StyledContent>
          <div className="divDate">
            <h2 className="h2Solicitation">Solicitações de alunos</h2>
            <GradeFilter />
            <ul>
              {studentMessage.length === 0 ? (
                <h2 className="h2Solicitation">
                  Você ainda não possui nenhuma solicitação de aluno
                </h2>
              ) : (
                grade ? filteredMessagesList : studentMessagesList
              )}
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

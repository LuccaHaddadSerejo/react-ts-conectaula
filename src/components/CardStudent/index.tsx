import { StyledCard } from "./style";
import andreaStudent from "../../assets/img/andreaStudent.png";
import { Button } from "../Button";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { getAllStudents } from "../../services/api";
import { iUserState } from "../../contexts/userContext/types";

export interface imessageInfo {
  message?: string;
  title?: string;
  email?:string;
  name?:string;
  
}

export const CardStudent = () => {
  const { studentMessage } = useContext(UserContext);
  const [dataUser, setDataUser]=useState([] as any)


  const getStudentData = async () => {
    const students = await getAllStudents();

    const result = studentMessage.map((elem) => {
      const filter = students?.filter((student) => {
        return elem.userId === student.id;
      });
      return filter;
    });
   if(result){
    setDataUser(result[0])
   }
  };

  getStudentData();

  return (
    <StyledCard>
      <div>
        <img src={andreaStudent} alt="Foto do estudante" />
      </div>
      <div className="dataUser">
        <h3>{dataUser.name}</h3>
        <span>{dataUser.email}</span>
        <p>{dataUser.message}</p>
        <h3>{dataUser.title}</h3>
        <p className="messageStudent">{""}</p>
        <div className="containerButton">
          <Button buttonVariation="showMore" type={"button"}>
            Mostrar mais
          </Button>
        </div>
      </div>
    </StyledCard>
  );
};

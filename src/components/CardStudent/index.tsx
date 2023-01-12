import { StyledCard } from "./style";
import avatarImgCard from "../../assets/img/avatarImgCard.gif"
import { Button } from "../Button";
import { useContext} from "react";
import { UserContext } from "../../contexts/userContext";


export interface imessageInfo {
  photo_url:string;
  message: string;
  title: string;
  email: string;
  name: string;
  grades: string;
  teacher_id?: number;
  userId?: number;
  
}

export const CardStudent = ({
  photo_url,
  message,
  title,
  email,
  name,
  grades,
  userId
}: imessageInfo) => {

  const {setModalStudant}=useContext(UserContext)


  return (
    <StyledCard>
      <div >
         {!photo_url ? (
            <img src={avatarImgCard} alt="" className="imgAvatarCard"/>
           ):(<img src={photo_url} alt="" className="imgAvatarCard"/>)}
   
      </div>
      <div className="dataUser">
        <h3>{name}</h3>
        <span>{email}</span>
        <span>{grades}</span>
        <h3>{title}</h3>
        <p>{message}</p>
        <p className="messageStudent">{""}</p>
        <div className="containerButton">
          <Button buttonVariation="showMore" type={"button"} onClick={()=>setModalStudant(true) }>
            Mostrar mais
          </Button>
        </div>
      </div>
    </StyledCard>
  );
};

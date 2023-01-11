import { useContext } from "react";
import { StyledEditProfile } from "../EditProfileTeacher/style";
import { UserContext } from "../../contexts/userContext";
import { Button } from "../Button";
import editIcon from "../../assets/img/edit.svg";
import { iModalEditProps } from "../../pages/Dashboard student";

const EditProfileStudent = ({ OpenModalStudent }: iModalEditProps) => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <StyledEditProfile>
      <img src={user?.photo_url} alt="Foto de perfil" className="imgProfile" />
      <h2>{user?.name}</h2>
      <p>Aluno</p>
      <Button type={"button"} onClick={() => OpenModalStudent(true)}>
        Perfil{" "}
        <span>
          <img src={editIcon} alt=""></img>
        </span>
      </Button>
    </StyledEditProfile>
  );
};

export default EditProfileStudent;

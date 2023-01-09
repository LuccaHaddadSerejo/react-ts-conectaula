import { Button } from "../Button"
import editIcon from "../../assets/img/edit.svg"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { StyledPrefTeacher } from "./style"

export const EditPreferencesTeacher = () => {
    const {user} = useContext(UserContext)

    return (
        <StyledPrefTeacher>
            <div className="editPrefTeacherHeader">
                <h2>Preferencias</h2>
                <Button buttonVariation="editPrefTeacher" type="button">Editar <img src={editIcon} alt="" /></Button>
            </div>
            <div className="schoolYearPreference">
                <h3>Período Escolar</h3>
                <div>
                    {user?.school_year_preference?.map(element => {
                        return <p>{element}</p>
                    })} 
                </div>
            </div>
            <div className="prefGradeTeacher">
                <h3>Matérias</h3>
                <div>
                    {user?.grades?.map(element => {
                        return <p>{element}</p>
                    })} 
                </div>
            </div>
        </StyledPrefTeacher>
    )
}
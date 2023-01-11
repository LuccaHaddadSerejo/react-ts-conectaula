import { useContext, useState } from "react"
import { GradesContext } from "../../contexts/gradesContext"
import { iUserState } from "../../contexts/userContext/types"
import { getAllTeachers } from "../../services/api"
import { TeacherCard } from "../TeacherCard"

export const AvailableTeachersList = () => {
    const { grade } = useContext(GradesContext)

    const [teachersLoaded, setLoadedTechers] = useState(false);
    const [teachers, setTeachers] = useState([] as iUserState[])
    
    const getTeachers = async () => {
        const teachersApi = await getAllTeachers()
        setTeachers(teachersApi)
        setLoadedTechers(true)
    }

    if(!teachersLoaded) {
        getTeachers()
    }

    
    const parseteachers = (teachersParam: iUserState[]) => {
        if(teachersParam.length > 0) {
            return teachersParam.map(teacher => <TeacherCard user={teacher} />)
        }

        return <h1>Ainda não há professores cadastrados</h1>
    }
    
    const filteredTeachers = teachers.filter(teacher => {
        console.log(teacher.grades)
        return teacher.grades?.includes(grade)
    })

    const teachersList = parseteachers(teachers) 
    const filteredTeachersList = parseteachers(filteredTeachers)

    return (
        <ul>
            {grade ? filteredTeachersList : teachersList}
        </ul>
    )
}
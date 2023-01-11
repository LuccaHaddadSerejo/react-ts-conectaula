import { Button } from "../Button"
import { StyledTeacherCard } from "./style"
import julianaPic from "../../assets/img/JulianaPic.jpg"

export const TeacherCard = () => {
    return (
        <StyledTeacherCard>
                <img src={julianaPic} alt="" />
            <div className="teacherInfo">
                <div className="teacherNameEmail">
                    <h2>Roberta Silva</h2>
                    <p>email@email.com</p>
                </div>
                <p>Matérias relacionadas:</p>
                <ul className="teacherGrades">
                    <li>Inglês</li>
                    <li>Português</li>
                    <li>Redação</li>
                    <li>Redação</li>
                    <li>Redação</li>
                    <li>Redação</li>
                </ul>
                <div className="teacherBio">
                    <p>Biografia:</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quae, aut velit laborum iste autem, sequi saepe perspiciatis nobis omnis repudiandae quas possimus at neque quis assumenda quibusdam voluptatum nulla!</p>
                </div>
            </div>
            <Button type="button" buttonVariation="defaultRound">Mostrar mais</Button>
        </StyledTeacherCard>
    )
}
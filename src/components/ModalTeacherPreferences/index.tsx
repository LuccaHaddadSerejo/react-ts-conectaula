import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledModalTeacherPreferences } from "./styles";
import { editPrefTeacherSchema } from "./editPrefTeacherSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

interface iEditPreferencesTeacher {
  email: string;
  password: string;
  bio: string;
  photo_url: string;
  school_year_preference: string[];
  grades: string[];
  type: string;
}

export const ModalTeacherPreferences = ({ closeModal }: any) => {
  const { user, editProfile, globalLoading, modalLoading, setModalLoading } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditPreferencesTeacher>({
    mode: "onBlur",
    resolver: yupResolver(editPrefTeacherSchema),
  });

  const submit = (data: iEditPreferencesTeacher) => {
    const userId = localStorage.getItem("@USERID");
    editProfile(data, userId);
  };

  if (!modalLoading) {
    closeModal();
    setModalLoading(true);
  }

  // if(modalLoading){
  //   setModalLoading(true)
  // }

  return (
    <StyledModalTeacherPreferences>
      <div className="modalTeacherBox">
        <Form onSubmit={handleSubmit(submit)}>
          <div className="modalTeacherPrefHeader">
            <h2>Editar preferência</h2>
            <Button onClick={closeModal} type="button">
              X
            </Button>
          </div>
          <div className="modalSchoolPreference">
            <h3>Preferência de escolaridade</h3>
            <div className="modalSchoolPrefCheckbox">
              <div>
                <Input
                  id="1"
                  label="Ensino fundamental I"
                  type="checkbox"
                  register={register("school_year_preference")}
                  value={"Ensino fundamental I"}
                />
              </div>
              <div>
                <Input
                  id="2"
                  label="Ensino fundamental II"
                  type="checkbox"
                  register={register("school_year_preference")}
                  value={"Ensino fundamental II"}
                />
              </div>
              <div>
                <Input
                  id="3"
                  label="Ensino medio"
                  type="checkbox"
                  register={register("school_year_preference")}
                  value={"Ensino médio"}
                />
              </div>
              {errors.school_year_preference?.message && (
                <p className="erroYupSchool">
                  {errors.school_year_preference.message}
                </p>
              )}
            </div>
            <hr />
          </div>
          <div className="modalTeacherGrades">
            <h3>Escolha de metériaa</h3>
            <div className="modalTeacherGradesCheckbox">
              <div>
                <Input
                  id={"gradeSpanish"}
                  hidden={false}
                  value={"Espanhol"}
                  label={"Espanhol"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeEnglish"}
                  hidden={false}
                  value={"Inglês"}
                  label={"Inglês"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeSociology"}
                  hidden={false}
                  value={"Sociologia"}
                  label={"Sociologia"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradePhilosophy"}
                  hidden={false}
                  value={"Filosofia"}
                  label={"Filosofia"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeHistory"}
                  hidden={false}
                  value={"História"}
                  label={"História"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeGeography"}
                  hidden={false}
                  value={"Geografia"}
                  label={"Geografia"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeBiology"}
                  hidden={false}
                  value={"Biologia"}
                  label={"Biologia"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradePhysics"}
                  hidden={false}
                  value={"Física"}
                  label={"Física"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeChemistry"}
                  hidden={false}
                  value={"Química"}
                  label={"Química"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeScience"}
                  hidden={false}
                  value={"Ciências"}
                  label={"Ciências"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeArts"}
                  hidden={false}
                  value={"Arte"}
                  label={"Arte"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeMath"}
                  hidden={false}
                  value={"Matemática"}
                  label={"Matemática"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradePortuguese"}
                  hidden={false}
                  value={"Português"}
                  label={"Português"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
              <div>
                <Input
                  id={"gradeEssay"}
                  hidden={false}
                  value={"Redação"}
                  label={"Redação"}
                  type={"checkbox"}
                  register={register("grades")}
                />
              </div>
            </div>
            {errors.grades?.message && (
              <p className="erroYupGrades">{errors.grades.message}</p>
            )}
            <div className="modalTeacherPrefButtons">
              <Button onClick={closeModal} type="button">
                Cancelar
              </Button>
              <Button disabled={globalLoading} type="submit">
                {globalLoading ? "Salvando..." : "Salvar alterações"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </StyledModalTeacherPreferences>
  );
};

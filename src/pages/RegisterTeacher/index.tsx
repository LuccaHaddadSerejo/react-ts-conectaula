import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "./formSchema";
import { Form } from "../../components/Form";
import { UserContext } from "../../contexts/userContext";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { TextArea } from "../../components/TextArea";

interface iFormRegisterTeacherValues {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  age: number;
  bio: string;
  photo_url: string;
  school_year_preference: string[];
  grades: string[];
  type: string;
}

const RegisterTeacher = () => {
  const { submitRegisterTeacher, globalLoading } = useContext(UserContext);
  const [isSecondPart, setIsSecondPart] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterTeacherValues>({
    resolver: yupResolver(registerSchema),
  });

  const handleClick = () => {
    setIsSecondPart((previousState) => !previousState);
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1>Faça seu cadastro!</h1>
            <p>E comece a reforçar seu aprendizado agora mesmo!</p>
          </div>
          <Form
            noValidate={true}
            onSubmit={handleSubmit(submitRegisterTeacher)}
          >
            {isSecondPart === false ? (
              <div>
                <Input
                  id={"teacherName"}
                  hidden={true}
                  label={"Nome"}
                  type={"text"}
                  register={register("name")}
                />
                {errors.name?.message && <p>{errors.name.message}</p>}
                <Input
                  id={"teacherAge"}
                  hidden={true}
                  label={"Idade"}
                  type={"number"}
                  register={register("age")}
                />
                {errors.age?.message && <p>{errors.age.message}</p>}
                <Input
                  id={"teacherPhoto"}
                  hidden={true}
                  label={"Foto"}
                  type={"url"}
                  register={register("photo_url")}
                />
                {errors.photo_url?.message && <p>{errors.photo_url.message}</p>}
                <Input
                  id={"teacherEmail"}
                  hidden={true}
                  label={"Email"}
                  type={"email"}
                  register={register("email")}
                />
                {errors.email?.message && <p>{errors.email.message}</p>}
                <Input
                  id={"teacherPassword"}
                  hidden={true}
                  label={"Senha"}
                  type={"password"}
                  register={register("password")}
                />
                {errors.password?.message && <p>{errors.password.message}</p>}
                <Input
                  id={"teacherConfirmPassword"}
                  hidden={true}
                  label={"Confirmar senha"}
                  type={"password"}
                  register={register("confirm_password")}
                />
                {errors.confirm_password?.message && (
                  <p>{errors.confirm_password.message}</p>
                )}
                <TextArea
                  label={"Biografia"}
                  id={"teacherBio"}
                  register={register("bio")}
                ></TextArea>
                {errors.bio?.message && <p>{errors.bio.message}</p>}
                <div>
                  <Button type={"button"} onClick={handleClick}>
                    Próximo
                  </Button>
                  <div>
                    <Link to={"/login"}>Ir para o login</Link>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <Button type={"button"} onClick={handleClick}>
                    Voltar
                  </Button>
                </div>
                <div>
                  <div>
                    <p>Preferência de escolaridade</p>

                    <Input
                      id={"middleSchoolOne"}
                      value={"Ensino fundamental I"}
                      hidden={false}
                      label={"Ensino fundamental I"}
                      type={"checkbox"}
                      register={register("school_year_preference")}
                    />

                    <Input
                      id={"middleSchoolTwo"}
                      hidden={false}
                      value={"Ensino fundamental II"}
                      label={"Ensino fundamental II"}
                      type={"checkbox"}
                      register={register("school_year_preference")}
                    />

                    <Input
                      id={"schoolingHighSchool"}
                      hidden={false}
                      value={"Ensino médio"}
                      label={"Ensino médio"}
                      type={"checkbox"}
                      register={register("school_year_preference")}
                    />
                    {errors.school_year_preference?.message && (
                      <p>{errors.school_year_preference.message}</p>
                    )}
                  </div>
                  <div>
                    <p>Escolha de matérias</p>

                    <Input
                      id={"gradeSpanish"}
                      hidden={false}
                      value={"Espanhol"}
                      label={"Espanhol"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradeEnglish"}
                      hidden={false}
                      value={"Inglês"}
                      label={"Inglês"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradeSociology"}
                      hidden={false}
                      value={"Sociologia"}
                      label={"Sociologia"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradePhilosophy"}
                      hidden={false}
                      value={"Filosofia"}
                      label={"Filosofia"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradeHistory"}
                      hidden={false}
                      value={"História"}
                      label={"História"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradeGeography"}
                      hidden={false}
                      value={"Geografia"}
                      label={"Geografia"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradeBiology"}
                      hidden={false}
                      value={"Biologia"}
                      label={"Biologia"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradePhysics"}
                      hidden={false}
                      value={"Física"}
                      label={"Física"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradeChemistry"}
                      hidden={false}
                      value={"Química"}
                      label={"Química"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    <Input
                      id={"gradeScience"}
                      hidden={false}
                      value={"Ciências"}
                      label={"Ciências"}
                      type={"checkbox"}
                      register={register("grades")}
                    />
                    <Input
                      id={"gradeArts"}
                      hidden={false}
                      value={"Arte"}
                      label={"Arte"}
                      type={"checkbox"}
                      register={register("grades")}
                    />
                    <Input
                      id={"gradeMath"}
                      hidden={false}
                      value={"Matemática"}
                      label={"Matemática"}
                      type={"checkbox"}
                      register={register("grades")}
                    />
                    <Input
                      id={"gradePortuguese"}
                      hidden={false}
                      value={"Português"}
                      label={"Português"}
                      type={"checkbox"}
                      register={register("grades")}
                    />
                    <Input
                      id={"gradeEssay"}
                      hidden={false}
                      value={"Redação"}
                      label={"Redação"}
                      type={"checkbox"}
                      register={register("grades")}
                    />

                    {errors.grades?.message && <p>{errors.grades.message}</p>}
                  </div>
                  <div>
                    <p>
                      Não se preocupe, os dados de escolaridade e as matérias
                      escolhidas podem ser modificadas depois
                    </p>
                    <Button disabled={globalLoading} type={"submit"}>
                      {globalLoading ? "Cadastrando..." : "Finalizar Cadastro"}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Form>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default RegisterTeacher;

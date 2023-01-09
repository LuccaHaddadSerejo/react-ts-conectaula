import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "./formSchema";
import { Form } from "../../components/Form";
import { UserContext } from "../../contexts/userContext";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

interface iFormRegisterStudentValues {
  name: string;
  email: string;
  age: number;
  password: string;
  confirm_password: string;
  type: string;
}

const RegisterStudent = () => {
  const { submitRegisterStudent, globalLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterStudentValues>({
    resolver: yupResolver(registerSchema),
  });
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
            onSubmit={handleSubmit(submitRegisterStudent)}
          >
            <Input
              id={"studentName"}
              hidden={true}
              label={"Nome"}
              type={"text"}
              register={register("name")}
              placeholder={"Nome"}
            />
            {errors.name?.message && <p>{errors.name.message}</p>}
            <Input
              id={"studentAge"}
              hidden={true}
              label={"Idade"}
              type={"number"}
              defaultValue={0}
              register={register("age")}
              placeholder={"Idade"}
            />
            {errors.age?.message && <p>{errors.age.message}</p>}
            <Input
              id={"studentEmail"}
              hidden={true}
              label={"Email"}
              type={"email"}
              register={register("email")}
              placeholder={"Email"}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
            <Input
              id={"studentPassword"}
              hidden={true}
              label={"Senha"}
              type={"password"}
              register={register("password")}
              placeholder={"Senha"}
            />
            {errors.password?.message && <p>{errors.password.message}</p>}
            <Input
              id={"studentConfirmPassword"}
              hidden={true}
              label={"Confirmar senha"}
              type={"password"}
              register={register("confirm_password")}
              placeholder={"Confirmar senha"}
            />
            {errors.confirm_password?.message && (
              <p>{errors.confirm_password.message}</p>
            )}
            <div>
              <Button disabled={globalLoading} type={"submit"}>
                {globalLoading ? "Cadastrando..." : "Finalizar Cadastro"}
              </Button>
              <Link to={"/login"}>Ir para o login</Link>
            </div>
          </Form>
          <p>
            Para utilizar nossos serviços o estudante deve ser maior de idade ou
            estar acompanhado de um responsável.
          </p>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default RegisterStudent;

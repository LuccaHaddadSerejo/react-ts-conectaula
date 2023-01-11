import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "./formSchema";
import { Form } from "../../components/Form";
import { UserContext } from "../../contexts/userContext";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import MainStyledContainer from "../../components/MainContainer/style";
import linkArrow from "../../assets/img/linkArrow.svg";
import StyledRegisterContainer from "./style";
import RegisterHeading from "../../components/RegisterHeading";

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
    <MainStyledContainer>
      <StyledRegisterContainer>
        <RegisterHeading>
          <p>E comece a reforçar seu aprendizado agora mesmo!</p>
        </RegisterHeading>
        <Form noValidate={true} onSubmit={handleSubmit(submitRegisterStudent)}>
          <Input
            id={"studentName"}
            hidden={true}
            label={"Nome"}
            type={"text"}
            register={register("name")}
            placeholder={"Nome"}
          />
          {errors.name?.message && <span>{errors.name.message}</span>}
          <Input
            id={"studentAge"}
            hidden={true}
            label={"Idade"}
            type={"number"}
            defaultValue={0}
            register={register("age")}
            placeholder={"Idade"}
          />
          {errors.age?.message && <span>{errors.age.message}</span>}
          <Input
            id={"studentEmail"}
            hidden={true}
            label={"Email"}
            type={"email"}
            register={register("email")}
            placeholder={"Email"}
          />
          {errors.email?.message && <span>{errors.email.message}</span>}
          <Input
            id={"studentPassword"}
            hidden={true}
            label={"Senha"}
            type={"password"}
            register={register("password")}
            placeholder={"Senha"}
          />
          {errors.password?.message && <span>{errors.password.message}</span>}
          <Input
            id={"studentConfirmPassword"}
            hidden={true}
            label={"Confirmar senha"}
            type={"password"}
            register={register("confirm_password")}
            placeholder={"Confirmar senha"}
          />
          {errors.confirm_password?.message && (
            <span>{errors.confirm_password.message}</span>
          )}

          <div>
            <p className="warning">
              Aviso: Para utilizar nossos serviços o estudante deve ser maior de idade
              ou estar acompanhado de um responsável.
            </p>
          </div>

          <div>
            <Button disabled={globalLoading} type={"submit"} buttonVariation="registerStudent">
              {globalLoading ? "Cadastrando..." : "Finalizar Cadastro"}
            </Button>
            <Link to={"/login"}>Ir para o login <span><img src={linkArrow} alt="" /></span></Link>
          </div>
        </Form>
      </StyledRegisterContainer>
      <div className="imgDiv"></div>
    </MainStyledContainer>
  );
};

export default RegisterStudent;

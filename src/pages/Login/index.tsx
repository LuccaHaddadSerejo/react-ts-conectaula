import React, { useContext } from "react";
import loginWave1 from "../../assets/img/wavesDesktop/waveLogin1.svg";
import loginWave2 from "../../assets/img/wavesDesktop/waveLogin2.svg";
import { Form } from "../../components/Form";
import { UserContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./formSchema";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { StyledLoginPage } from "./style";

interface iFormLoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { submitLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledLoginPage>
      <div className="loginImg"></div>
      <div className="loginContentContainer">
        <div className="loginContent">
          <img src={loginWave1} alt="Vetor de onda lilás" className="topWave" />
          <h1 className="loginTitle">Faça seu login</h1>
          <Form noValidate={true} onSubmit={handleSubmit(submitLogin)}>
            <Input
              id="userEmail"
              type="email"
              placeholder="Email"
              register={register("email")}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
            <Input
              id="userPassword"
              type="password"
              placeholder="Senha"
              register={register("password")}
            />
            {errors.password?.message && <p>{errors.password.message}</p>}
            <Button type="submit" buttonVariation="defaultButton">Login</Button>
          </Form>
          <div className="registerOption">
            <p>Não tem conta ainda?</p>
            <Link to={"/"}>
              Cadastre-se
              <span> aqui</span>
            </Link>
          </div>
          <img
            src={loginWave2}
            alt="Vetor de onda lilás"
            className="bottomWave"
          />
        </div>
      </div>
    </StyledLoginPage>
  );
};

export default Login;

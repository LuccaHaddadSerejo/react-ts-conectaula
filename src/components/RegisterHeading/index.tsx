import StyledHeading from "./style";

interface iRegisterHeadingProps {
  children: React.ReactNode;
}

const RegisterHeading = ({ children }: iRegisterHeadingProps) => {
  return (
    <StyledHeading>
      <h1>Faça seu cadastro</h1>
      {children}
    </StyledHeading>
  );
};

export default RegisterHeading;

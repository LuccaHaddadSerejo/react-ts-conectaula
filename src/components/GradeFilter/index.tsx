import React, { useContext } from "react";
import { GradesContext } from "../../contexts/gradesContext";
import StyledSelect from "./style";

const GradeFilter = () => {
  const { setGrade } = useContext(GradesContext);

  const getGrade = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setGrade(target.value);
  };

  return (
    <StyledSelect name="" id="" onChange={getGrade}>
      <option value="">Selecione uma matéria</option>
      <option value="Espanhol">Espanhol</option>
      <option value="Inglês">Inglês</option>
      <option value="Sociologia">Sociologia</option>
      <option value="Filosofia">Filosofia</option>
      <option value="História">História</option>
      <option value="Geografia">Geografia</option>
      <option value="Biologia">Biologia</option>
      <option value="Física">Física</option>
      <option value="Química">Química</option>
      <option value="Ciências">Ciências</option>
      <option value="Artes">Artes</option>
      <option value="Matemática">Matemática</option>
      <option value="Português">Português</option>
      <option value="Redação">Redação</option>
    </StyledSelect>
  );
};

export default GradeFilter;

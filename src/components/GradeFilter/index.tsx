// import { useState } from "react";

import StyledSelect from "./style";

const GradeFilter = () => {
  // const [dashType, setDashType] = useState('');

  return (
    <StyledSelect name="" id="">
      <option value="">Selecione uma matéria</option>
      <option value="espanhol">Espanhol</option>
      <option value="inglês">Inglês</option>
      <option value="sociologia">Sociologia</option>
      <option value="filosofia">Filosofia</option>
      <option value="história">História</option>
      <option value="geografia">Geografia</option>
      <option value="biologia">Biologia</option>
      <option value="física">Física</option>
      <option value="química">Química</option>
      <option value="ciências">Ciências</option>
      <option value="artes">Artes</option>
      <option value="matemática">Matemática</option>
      <option value="português">Português</option>
      <option value="redação">Redação</option>
    </StyledSelect>
  );
};

export default GradeFilter;

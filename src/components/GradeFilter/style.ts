import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  border-radius: 8px;
  border: 2px solid var(--color-gray300);

  &, & > option {
    color: var(--color-gray300);
    font-size: 14px;
    font-weight: bold;
  }

  @media (min-width: 320px) {
    max-width: 250px;
  }

  @media (min-width: 700px) {
    max-width: 350px;
  }

  @media (min-width: 1050px) {
    max-width: 300px;
  }
`;

export default StyledSelect;

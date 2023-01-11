import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  max-width: 220px;
  height: 35px;
  border-radius: 8px;
  border: 2px solid var(--color-gray300);

  &,
  & > option {
    color: var(--color-gray300);
    font-size: 14px;
    font-weight: bold;
  }
`;

export default StyledSelect;

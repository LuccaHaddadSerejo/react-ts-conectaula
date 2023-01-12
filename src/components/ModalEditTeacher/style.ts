import styled from "styled-components";

export const StyledModalContent = styled.div`
  width: 90%;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--color-white);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;


  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: --weight4;
    font-size: var(--text-size4);
    line-height: 26px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .inputDiv label {
    display: none;
  }

  input {
    border: none;
    border-bottom: 1.5px solid var(--color-primary);
    outline: none;
    padding: 0 10px;
  }

  .divButton {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;

    button {
      width: 100%;
    }
  }

  span {
    padding: 5px 0;
    display: block;
    font-size: var(--text-size8);
    font-weight: bold;
    color: var(--color-tertiary);
  }

  @media (min-width: 500px) {
    .divButton {
      flex-direction: row;
    }
  }

  @media (min-width: 600px) {
    max-width: 500px;

  }
`;

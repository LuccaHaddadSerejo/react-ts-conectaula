import styled from "styled-components";

export const StyledModalStudentContent = styled.div`
  width: 100%;
  max-width: 90%;
  border-radius: 10px;
  background-color: var(--color-white);
  padding: 20px;
  max-width: 90%;

  & h3 {
    font-family: var(--font-family2);
  }

  & li {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    div:nth-child(1) {
      display: none;
    }
    div:nth-child(2) {
      display: none;
    }
    div:nth-child(3) {
      display: none;
    }
    div:nth-child(4) {
      display: none;
    }
    div:nth-child(5) {
      display: none;
    }
    div:nth-child(6) {
      display: none;
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: solid 1px;
    margin-bottom: 20px;
  }
  .containerButtonModal {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
  }

  @media (min-width: 700px) {
    max-width: 600px;
  }
`;

export const StyledCardOpenModal = styled.li`
  gap: 20px;
  display: flex;

  div {
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px 0 0 10px;
      max-width: 150px;
    }
  }

  .dataUserModal {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;

    p {
      font-size: var(--text-size7);
    }

    .messageStudentModal {
      width: 100%;
      max-width: 240px;
    }
  }
`;

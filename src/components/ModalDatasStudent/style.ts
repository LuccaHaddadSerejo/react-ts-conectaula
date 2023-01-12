import styled from "styled-components";

export const StyledModalStudentContent = styled.div`
  /* height: 660px; */
  width: 90%;
  max-width: 600px;
  border-radius: 10px;
  background-color: var(--color-white);

  padding: 20px;

  form {
    label{
      display: none;
    }
    display: flex;
    flex-direction: column;
    gap: 10px;
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
`;

export const StyledCardOpenModal = styled.li`
  gap: 20px;
  display: flex;

  div {
    img {
      width: 100%;
      height: 250px;
      border-radius: 10px;
      object-fit: cover;
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

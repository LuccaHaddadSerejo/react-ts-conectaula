import styled from "styled-components";

export const StyledModalStudentContent = styled.div`
  height: 680px;
  width: 604px;
  border-radius: 10px;
  background-color: var(--color-white);
  padding: 20px;
  max-width: 90%;
  
ul{
 
}
  form {
    label {
      display: none;
    }
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
        div:nth-child(6){
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
`;

export const StyledCardOpenModal = styled.li`
  gap: 20px;
  display: flex;

  div {
    img {
      height: 250px;
      border-radius: 10px 0 0 10px;
      width: 100%;
    }
    width: 400px;
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

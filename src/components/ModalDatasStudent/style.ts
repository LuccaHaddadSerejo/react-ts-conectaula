import styled from "styled-components";

export const StyledModalStudentContent = styled.div`
  height: 410px;
  width: 464px;
  border-radius: 10px;
  background-color: var(--color-white);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: solid 1px;
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
  padding: 15px;
  div {
    img {
      height: 250px;
      border-radius: 10px 0 0 10px;
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

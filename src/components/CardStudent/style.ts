import styled from "styled-components";

export const StyledCard = styled.li`
  background-color: var(--color-white);
  height: 190px;
  width: 400px;
  border-radius: 10px;
  max-width: 100%;
  display: flex;
  gap: 20px;
  padding:  0 10px 10px 0;

  .dataUser {
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: end;
    width: 100%;

    p {
      font-size: var(--text-size7);
    }
    .containerButton{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .messageStudent{
        width: 100%;
        max-width: 240px;
      
    }
    
  }
  .imgAvatarCard{
      height: 190px;
      width: 90px;
      border-radius: 10px 0 0 10px;
      border: none;
    }
`;

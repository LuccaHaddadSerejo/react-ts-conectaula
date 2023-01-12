import styled from "styled-components";

export const StyledCard = styled.li`
  background-color: var(--color-white);
  min-height: 200px;
  max-height: 200px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  display: flex;
  gap: 20px;

  .dataUser {
    max-width: 75%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-family: var(--font-family2);
    }

    p {
      font-size: var(--text-size7);
    }

    .containerButton {
      display: flex;
      justify-content: flex-end;
    }
    .messageStudent {
      width: 100%;
    }
  }
  .imgAvatarCard {
    height: 100%;
    max-width: 100px;
    border-radius: 10px 0 0 10px;
    border: none;
    object-fit: cover;
  }
`;

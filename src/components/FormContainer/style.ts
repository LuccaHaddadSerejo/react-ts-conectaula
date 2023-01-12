import styled from "styled-components";


export const StyledFormContainer = styled.div`

  width: 100%;
  padding: 40px 25px;
  background-color: var(--color-white);
  border-radius: var(--radius3);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


 export const StyledBottomDiv = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  & a {
    width: 100%;
    padding: 15px 0;
    display: inline-block;
    font-size: var(--text-size6);
    font-weight: var(--weight1);
    color: var(--color-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    > span {
      display: inline-block;

      > img {
        width: 15px;
        position: relative;
        top: 3px;
      }
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;

    .secondForm {
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        max-width: 400px;
      }
    }
  }
`;


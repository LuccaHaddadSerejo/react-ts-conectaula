import styled from "styled-components";

export const StyledModalTeacherPreferences = styled.div`

  width: 90%;
  background-color: var(--color-white);
  border-radius: var(--radius3);
  padding: 0 0 15px;
  max-width: 600px;


  .modalTeacherBox label {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: var(--weight1);
    font-size: var(--text-size7);
    line-height: 16px;
  }

  .modalTeacherPrefHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 89px;
    border-bottom: 1px solid var(--color-gray1000);
    padding: 0 20px;
  }

  .modalTeacherPrefHeader h2 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: --weight4;
    font-size: var(--text-size4);
    line-height: 26px;
  }

  & h3 {
    font-family: var(--font-family2);
  }

  .modalTeacherPrefHeader button {
    font-family: "Nunito";
    font-style: normal;
    font-weight: var(--weight4);
    font-size: var(--text-size2);
    line-height: 33px;
    background: none;
    border: none;
  }

  .modalSchoolPreference {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    padding: 0 20px;
  }

  .modalSchoolPreference hr {
    color: var(--color-primary);
    margin-top: 5px;
  }

  .modalSchoolPrefCheckbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    align-items: flex-start;
  }

  .modalSchoolPrefCheckbox div,
  .modalTeacherGradesCheckbox div {
    align-items: center;
  }

  .modalTeacherGrades {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    padding: 0 20px;
  }

  .modalTeacherGradesCheckbox {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 10px;
    gap: 10px;
    align-items: flex-start;
    height: 230px;
  }

  .modalTeacherPrefButtons {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    gap: 25px;
  }

  .modalTeacherPrefButtons button:nth-child(1) {
    background-color: var(--color-gray200);
    color: var(--color-gray600);
  }

  .modalTeacherPrefButtons button:nth-child(2) {
    background: linear-gradient(180deg, #66bce6 0%, #a995e8 100%);
    color: var(--color-white);
  }

  .modalTeacherPrefButtons button {
    width: 100%;
    height: 60px;
    border: none;
    font-family: var(--font-family3);
    font-weight: var(--weight2);
    font-size: var(--text-size6);
    border-radius: var(--radius3);
  }

  & span {
    color: var(--color-error);
    font-size: var(--text-size6);
    font-weight: var(--weight2);
  }

  @media (min-width: 600px) {
    max-width: 500px;

    .modalTeacherPrefButtons {
      flex-direction: row;
    }
  }
`;

import styled from "styled-components";

export const StyledModalStudentPreferences = styled.div `
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
   padding: 0 10px;
   background-color: rgba(0,0,0,0.4);
   position: fixed;
   top: 0;
   left: 0;

   .modalStudentBox {
        width: 658px;
        background-color: var(--color-white);
        border-radius: var(--radius3);
        padding: 0 0 15px;
        max-width: 100%;
   }

   .modalStudentBox label {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: var(--weight1);
    font-size: var(--text-size7);
    line-height: 16px;
   }

   .modalStudentPrefHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 89px;
        border-bottom: 1px solid var(--color-gray1000);
        padding: 0 20px;
   }

   .modalStudentPrefHeader h2 {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: --weight4;
        font-size: var(--text-size4);
        line-height: 26px;
   }

   .modalStudentPrefHeader button {
        font-family: 'Nunito';
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

   .modalSchoolPrefCheckbox div {
        display: flex;
        flex-direction: row-reverse;
        gap: 5px;
   }

   .modalStudentGrades {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
        padding: 0 20px;
   }

   .modalStudentGradesCheckbox {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 10px;
        gap: 10px;
        align-items: flex-start;
        height: 190px;
   }

   .modalStudentGradesCheckbox div {
        display: flex;
        flex-direction: row-reverse;
        gap: 5px;
   }

   .modalStudentPrefButtons {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        max-width: 100%;
        margin-top: 10px;
        
   }

   .modalStudentPrefButtons button:nth-child(1) {
        width: 159px;
        height: 60px;
        background-color: var(--color-gray200);
        border-radius: var(--radius3);
        border: none;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: var(--weight2);
        font-size: var(--text-size5);
        line-height: 25px;
        color: #64748B;
   }

   .modalStudentPrefButtons button:nth-child(2) {
        width: 100px;
        background: linear-gradient(180deg, #66BCE6 0%, #A995E8 100%);
        width: 173px;
        height: 60px;
        border: none;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: var(--weight2);
        font-size: var(--text-size5);
        line-height: 25px;
        color: var(--color-white);
        border-radius: var(--radius3);
   }

   .erroYupSchool {
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        color: var(--color-error);
   }

   .erroYupGrades {
        color: var(--color-error);
        
   }
`
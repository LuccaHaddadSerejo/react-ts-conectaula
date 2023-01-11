import styled from "styled-components";

export const StyledPrefStudent = styled.div `
   display: flex;
   flex-direction: column;
   width: 250px;
   min-height: 160px;
   background-color: var(--color-gray0);
   box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
   border-radius: 20px;
   padding: 15px;

   .editPrefStudentHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
   }

   .editPrefStudentHeader h2 {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: var(--weight1);
        font-size: var(--text-size5);
        line-height: 21px;
        color: var(--color-gray1000);
   }

   .schoolYearPreference {
        display: flex;
        flex-direction: column;
        gap: 10px;
   }

   .schoolYearPreference h3 {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: var(--weight1);
        font-size: var(--text-size7);
        line-height: 16px;
        color: var(--color-gray1000);
   }

   .schoolYearPreference div {
        display: flex;
        flex-direction: column;
        gap: 5px;
   }

   .schoolYearPreference div p {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: var(--weight2);
        font-size: var(--text-size8);
        line-height: 14px;
        cursor: default;
   }

   .prefGradeStudent {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
   }

   .prefGradeStudent h3 {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: var(--weight1);
        font-size: var(--text-size7);
        line-height: 16px;
        color: var(--color-gray1000);
   }

   .prefGradeStudent div {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
   }

   .prefGradeStudent div p {
        background: var(--color-white);
        border: 1px solid var(--color-tertiary);
        border-radius: 15px;
        padding: 0 10px;
        height: 16px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: var(--weight1);
        font-size: var(--text-size8);
        line-height: 14px;
        color: var(--color-tertiary);
        cursor: default;
   }
`
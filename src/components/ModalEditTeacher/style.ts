import styled from "styled-components";

export const StyledModalContent = styled.div`
    height: 550px;
    width: 453px;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: var(--color-white);
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input {
        border: none;
        border-bottom: 1.5px solid  var(--color-primary);
        outline: none;
        padding: 0 10px;
    }

    /* input, textarea, label {
        font-family: var(--font-family3);
        font-size: var(--text-size6);
        font-weight: var( --weight2);
    } */

    /* .labelInput {
        padding: 5px 10px 0;
        color: var( --color-gray500);
       
    } */

    .divButton {
        display: flex;
        justify-content: space-between;
    }

    span {
        padding: 5px 0;
        display: block;
        font-size: var(--text-size8);
        font-weight: bold;
        color: var(--color-tertiary);
    }

`
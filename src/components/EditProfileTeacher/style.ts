import styled from "styled-components";

export const StyledEditProfile = styled.aside`
    width: 250px;
    height: 321px;
    border: 1px solid transparent;
    border-radius: 20px;
    background: #F5F5F5;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    button {
        height: 29px;
        width: 90px;
        border-radius: 15px;
        color: var(--color-secondary);
        border: 1px solid var(--color-secondary);
        display: flex;
        align-items: center;
        gap: 15px;
        img {
           position: relative;
           top: 2px;
        }
    }
`
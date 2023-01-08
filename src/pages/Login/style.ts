import styled from "styled-components";
import loginImg from "../../assets/img/LoginImg.svg"

export const StyledLoginPage = styled.div`
    display: flex;
    justify-content: space-between;

    .loginImg {
        height: 100vh;
        width: 50%;
        background-image: linear-gradient(180deg, rgba(102, 188, 230, 0.45) 0%, rgba(169, 149, 232, 0.45) 100%), url(${loginImg});
        background-repeat: no-repeat;
        background-size: cover;

        @media (max-width: 800px) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: -1;
        }
    }

    .loginContentContainer {
        width: 50%;
        display: flex;
        
        @media (max-width: 800px) {
            height: 100vh;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    }

    .loginContent {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;

        img {
            width: 50vw;   
        };

        @media (max-width: 800px) {
            width: 90%;
            padding: 1em;
            background-color: rgba(255, 255, 255, 0.81);
            border-radius: 8px;
        }
    }

    .loginTitle {
        font-size: var(--title-size3);
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        color: var(--color-secondary);
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .registerOption {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
        color: var(--color-gray700);
        font-size: 1.125rem;
        font-weight: 700;
        font-family: 'Nunito', sans-serif;
    }

    a > span {
        color: var(--color-secondary);
    }

    .bottomWave {
        position: fixed;
        bottom: -40px;    

        @media (max-width: 800px) {
            display: none;
        }
    }

    .topWave {
        position: fixed;
        top: -50px; 

        @media (max-width: 800px) {
            display: none;
        }
    }
`;

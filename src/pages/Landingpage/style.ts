import styled from "styled-components";
import landingImg from "../../assets/img/landingImg.svg";

export const StyledLandingPage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-gray600);

    @media (max-width: 800px) {
        justify-content: center;
    }

    .landingContentContainer {
        width: 50%;
        display: flex;
        justify-content: center;

        @media (max-width: 800px) {
            width: 100%;
        }
    }

    .landingContent {
        width: 90%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.5em;

        @media (max-width: 800px) {
            width: 90%;
            padding: 1em;
            background-color: rgba(255, 255, 255, 0.81);
            border-radius: 8px;
           
        }
    }

    .landingContent > img {
        height: 146px;
    }

    .logo {
        display: flex;
        flex-direction: column;
        margin: 2.5em 0 1em 0;
    }

    .logo > img {
        height: 145px;
    }

    .logoText {
        font-family: 'Roboto Slab';
        font-size: var(--title-size5);
        font-weight: 700;
        color: var(--color-secondary);

    }

    .landingTitle {
        font-size: var(--title-size6);
        font-family: 'Roboto Slab', serif;
        font-weight: 500;
        text-align: center;
        line-height: 2.625rem;
        

        @media (max-width: 1000px) {
            font-size: var(--title-size7);
        }
    }

    .brandSpan {
        color: var(--color-primary);
    }

    .teachSpan {
        color: var(--color-secondary);
    }

    .landingParagraph {
        font-size: var(--text-size6);
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color: var(--color-gray600);
    }

    .landingImg {
        width: 50%;
        height: 100vh;
        background-size: cover;
        background-image: linear-gradient(180deg, rgba(112, 188, 229, 0.45) 0%, rgba(136, 155, 229, 0.45) 52.6%), url(${landingImg});

        @media (max-width: 800px) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: -1;
        }
    }

    .landingSelection {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;

        @media (max-width: 800px) {
            width: 90%;
        }
    }

    .studentLink, .teacherLink {
        width: 100%;
        max-width: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.8em;
        border-radius: 10px;
        color: var(--color-gray0);
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .studentLink {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
    }

    .teacherLink {
        background-color: var(--color-secondary);
        border: 1px solid var(--color-secondary);
    }

    .aboutUs {
        color: var(--color-secondary);
        text-decoration: underline;
    }
`

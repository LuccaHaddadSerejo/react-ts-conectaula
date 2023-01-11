import styled from "styled-components";

export const StyledAboutContainer = styled.div`
    .goBackSection {
        display: flex;
        justify-content: center;
        gap: 2em;
        margin-top: 3em;
        font-size: var(--text-size3);
        font-weight: 500;
        color: var(--color-primary);
        text-decoration: underline;
    }
`

export const StyledWaveContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;


    .waveMobile {
        width: 100%;
        display: none;
        

        @media (max-width: 960px) {
            display: block;
        }
    }

    .waveDesk {
        width: 100%;

        @media (max-width: 960px) {
            display: none;
        }
    }
`

export const StyledAboutTitle = styled.h1`
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    color: var(--color-gray700);
    font-weight: 700;
    font-size: var(--title-size2);

`

export const StyledAboutUsList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3em;
    color: var(--color-gray700);
    font-size: var(--text-size7);

    @media (max-width: 960px) {
        flex-direction: column;
    }

    .member {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .memberPhoto {
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }

    .memberContact {
        display: flex;
        align-items: center;

        img {
            height: 40px;
            object-fit: cover;
        }
    }
`
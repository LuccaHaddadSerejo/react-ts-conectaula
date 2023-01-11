import styled from "styled-components";

export const StyledTeacherCard = styled.div`
    width: 325px;
    height: 205px;
    display: flex;
    gap: 1em;
    overflow: hidden;
    background-color: var(--color-gray0);
    border-radius: 0 10px 10px 0;
    position: relative;

    img {
        width: 85px;
        height: 205px;
        object-fit: cover;
        border-radius: 10px 0px 0px 10px;
    }

    p {
        font-size: var(--text-size9);
        font-weight: 700;
        font-family: 'Nunito';
        color: var(--color-gray900);
    }

    .teacherNameEmail {
        margin-bottom: 0.5em;
        & h2 {
            font-size: var(--text-size7);
            font-weight: 700;
            font-family: 'Roboto Slab';
            color: var(--color-gray900);
        }

        & p {
            font-weight: 400;
        }
    }

    .teacherGrades {
        margin-top: 0.3em;
        height: 30px;
        display: flex;
        gap: 0.563em;
        flex-wrap: wrap;
        overflow-y: hidden;

        & li {
            font-size: var(--text-size9);
            font-weight: 700;
            font-family: 'Nunito';
            color: var(--color-tertiary);
            border: 1px solid var(--color-tertiary);
            border-radius: 15px;
            padding: 0.3em;
        }
    }

    .teacherBio {
        width: 123px;
        height: 54px;
        overflow-y: hidden;
    }
`
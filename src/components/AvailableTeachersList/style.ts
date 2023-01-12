import styled from "styled-components";

export const StyledAvailableTeachersList = styled.ul`
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    padding-bottom: 2em;
    overflow-y: auto;

    @media (max-width: 1045px) {
        height: 90%;
        width: 100%;
        justify-content: center;
    }
`
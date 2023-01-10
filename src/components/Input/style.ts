import styled from "styled-components";

export const StyledInput = styled.div`
    width: 100%;
    
    input {
        padding: 0.5rem;
        border: none;
        border-bottom: solid 2px transparent;
        background-image: linear-gradient(white, white), 
                            linear-gradient(to right, var(--color-primary) 0%, var(--color-secondary) 100%);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        font-family: 'Open Sans';
        font-weight: 500;
        font-size: var(--text-size6);
        color: var(--color-gray600);

        :focus {
            outline: none;
            background-color: transparent;
        }

        ::placeholder {
            font-family: 'Open Sans';
            font-weight: 500;
            font-size: var(--text-size6);
            color: var(--color-gray300);
        }
    }
`;

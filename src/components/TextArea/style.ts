import styled from "styled-components";

export const StyledTextArea = styled.div`
  & label {
    display: block;
    margin: 10px 0;
    font-family: var(--font-family3);
    font-weight: var(--weight2);
    font-size: var(--text-size7);
    color: var(--color-gray300);
  }

  & textarea {
    width: 100%;
    height: 80px;
    margin-bottom: 5px;
    border: 2px solid var(--color-primary);
    outline: none;
    padding: 10px;
    border-radius: var(--radius3);
    resize: none;

    font-family: var(--font-family3);
    font-weight: var(--weight2);
    font-size: var(--text-size7);
  }

  @media (min-width: 1000px) {
    & label {
      font-size: var(--text-size6);
    }
  }
`;

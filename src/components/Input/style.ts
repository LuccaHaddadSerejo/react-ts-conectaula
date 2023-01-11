import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;

  input, input::placeholder {
    font-family: var(--font-family3);
    font-weight: var(--weight2);
    font-size: var(--text-size7);
  }
  
  input::placeholder {
    color: var(--color-gray300);
  }

  input {
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    border: none;
    border-bottom: solid 2px transparent;
    color: var(--color-gray600);

    background-image: linear-gradient(white, white),
      linear-gradient(
        to right,
        var(--color-primary) 0%,
        var(--color-secondary) 100%
      );
    background-clip: padding-box, border-box;

    :focus {
      outline: none;
      background-color: transparent;
    }
  }

  @media (min-width: 1000px) {
    input, input::placeholder {
      font-size: var(--text-size6);
    }
  }

`;

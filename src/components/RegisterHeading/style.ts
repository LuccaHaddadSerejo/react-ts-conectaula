import styled from "styled-components";

const StyledHeading = styled.div`
  & h1,
  & p {
    margin: 15px 0;
    font-family: var(--font-family2);
    color: var(--color-primary);
  }

  & h1 {
    font-size: var(--text-size2);
  }

  & h1,
  & p {
    text-align: center;
  }

  @media (min-width: 1000px) {
    & h1 {
      font-size: var(--title-size3);
    }

    & p {
      font-size: var(--text-size6);
    }
  }
`;

export default StyledHeading;

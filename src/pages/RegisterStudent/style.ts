import styled from "styled-components";
import StyledFormContainer from "../../components/FormContainer/style";

const StyledRegisterContainer = styled(StyledFormContainer)`
  & p {
    font-size: var(--text-size7);
    font-weight: bold;
    color: var(--color-gray600);
  }

  & h1,
  & p.subHeading {
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

  & span {
    padding: 5px 0;
    display: block;
    font-size: var(--text-size8);
    font-weight: bold;
    color: var(--color-tertiary);
  }

  & p.warning {
    padding: 20px 0;
    font-size: var(--text-size8);
    color: var(--color-gray300);
  }

  & a {
    width: 100%;
    padding: 15px 0;
    display: inline-block;
    font-size: var(--text-size6);
    font-weight: var(--weight1);
    color: var(--color-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    > span {
      display: inline-block;

      > img {
        width: 15px;
        position: relative;
        top: 3px;
      }
    }
  }
`;

export default StyledRegisterContainer;

import styled, { css } from "styled-components";

export interface iStyledButtonProps {
  buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  /* &:hover {
    filter: brightness(1.2);
  } */

  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case "logout":
        return css`
          border: none;
          background-color: transparent;
          font-weight: var(--weight1);
          font-size: var(--text-size7);
          gap: 0.5rem;
          color: #a995e8;
        `;

case "saveEditions":
  return css`
    border: none;
    background-color: transparent;
    font-weight: var(--weight1);
    font-size: var(--text-size7);
    gap: 0.5rem;
    color: var(--color-white);
    background-image: linear-gradient(180deg, var(--color-primary) 0%, var(--color-secondary) 100%) ;
    border-radius: 10px;
    width: 173px;
    height: 50px;
  `;

case "cancelEditions":
  return css`
    border: none;
    background-color: transparent;
    font-weight: var(--weight1);
    font-size: var(--text-size7);
    gap: 0.5rem;
    color: #64748B;
    background: #E4E4E4;
    border-radius: 10px;
    width: 173px;
    height: 50px;
  `;

case "closeModal":
  return css`
    border: none;
    background-color: transparent;
    font-weight: var(--weight1);
    font-size: var(--text-size5);
    color: var(--color-gray700);
  `;
    }
  }}
`;

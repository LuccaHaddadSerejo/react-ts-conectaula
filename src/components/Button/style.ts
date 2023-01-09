import styled, { css } from "styled-components";

export interface iStyledButtonProps {
  buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  &:hover {
    filter: brightness(1.2);
  }

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
      case "editPrefTeacher":
        return css`
          display: flex;
          gap: 10px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: var(--weight1);
          font-size: var(--text-size8: 0.75rem);
          line-height: 15px;
          color: var(--color-secondary);
          width: 90px;
          height: 32px;
          background-color: var(--color-white);
          border: 2px solid var(--color-secondary);
          border-radius: 15px;
        `  
    }
  }}
`;

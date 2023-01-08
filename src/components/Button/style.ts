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
    }
  }}
`;

import styled, { css } from "styled-components";

export interface iStyledButtonProps {
  buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;

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

          &:hover {
            filter: brightness(1.2);
          }
        `;

      case "saveEditions":
        return css`
          border: none;
          background-color: transparent;
          font-weight: var(--weight1);
          font-size: var(--text-size7);
          gap: 0.5rem;
          color: var(--color-white);
          background-image: linear-gradient(
            180deg,
            var(--color-primary) 0%,
            var(--color-secondary) 100%
          );
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
          color: #64748b;
          background: #e4e4e4;
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

      case "editPrefTeacher":
        return css`
          display: flex;
          gap: 10px;
          font-family: "Inter";
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
        `;

      case "defaultButton":
        return css`
          padding: 0.5em;
          border: none;
          border-radius: 10px;
          background: linear-gradient(
            180deg,
            var(--color-primary) 0%,
            var(--color-secondary) 100%
          );
          color: var(--color-white);
          font-size: var(--text-size4);
          font-weight: 700;
          font-family: "Open Sans";
        `;
    }
  }}
`;

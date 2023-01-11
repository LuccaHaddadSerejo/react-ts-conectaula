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
      case "register":
        return css`
          width: 100%;
          height: 40px;
          border-radius: var(--radius3);
          border: none;
          background: linear-gradient(
            180deg,
            rgba(102, 188, 230, 1) 0%,
            rgba(169, 149, 232, 1) 100%
          );
          color: var(--color-white);
          font-size: var(--text-size7);
          font-weight: var(--weight2);
          font-family: var(--font-family3);

          @media (min-width: 1000px) {
            max-width: 250px;
            height: 60px;
            font-size: var(--text-size5);
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
          font-style: normal;
          font-weight: var(--weight1);
          font-size: var(--text-size7);
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
            background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: var(--color-white);
            font-size: var(--text-size4);
            font-weight: 700;
            font-family: 'Open Sans';
            
          `;
          case "defaultRound": 
            return css`
              padding: 0.5em;
              border: none;
              border-radius: 25px;
              background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-secondary) 100%);
              color: var(--color-white);
              font-size: var(--text-size8);
              font-weight: 700;
              font-family: 'Open Sans';
              position: absolute;
              bottom: 11px;
              right: 11px;
            `;

          case "deletUser":
            return css`
              width: 173px;
              height: 50px;
              border: none;
              border-radius: 10px;
              background: var(--color-error);
              color: var(--color-white);
              font-size: var(--text-size7);
              font-weight: 700;
              font-family: 'Open Sans'; 
            `
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
        case "deletUser":
          return css`
            width: 173px;
            height: 50px;
            border: none;
            border-radius: 10px;
            background: var(--color-error);
            color: var(--color-white);
            font-size: var(--text-size7);
            font-weight: 700;
            font-family: "Open Sans";
          `;
    }
  }}
`;

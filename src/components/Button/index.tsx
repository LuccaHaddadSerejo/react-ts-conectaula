import React from "react";
import { StyledButton } from "./style";

interface iButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  buttonVariation?: string;
}

export const Button = ({
  disabled,
  children,
  onClick,
  type,
  buttonVariation,
}: iButtonProps) => {
  return (
    <StyledButton
      buttonVariation={buttonVariation}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

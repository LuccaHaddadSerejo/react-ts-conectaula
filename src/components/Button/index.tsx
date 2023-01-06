import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ disabled, children, onClick, type }: iButtonProps) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledTextArea } from "./style";

interface iTextAreaProps {
  id: string;
  label?: string;
  register?: UseFormRegisterReturn;
  rows?: string;
  cols?: string;
  children?: React.ReactNode;
  defaultValue?: string;
  value?:string;
}

export const TextArea = ({
  id,
  label,
  register,
  rows,
  cols,
  children,
  defaultValue,
  value,
}: iTextAreaProps) => {
  return (
    <StyledTextArea>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...register} defaultValue={defaultValue}></textarea>
    </StyledTextArea>
  );
};

export default TextArea;

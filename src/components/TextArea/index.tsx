import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface iTextAreaProps {
  id: string;
  label?: string;
  register?: UseFormRegisterReturn;
  rows?: string;
  cols?: string;
  children?: React.ReactNode;
}

export const TextArea = ({
  id,
  label,
  register,
  rows,
  cols,
  children,
}: iTextAreaProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...register}></textarea>
    </>
  );
};

export default TextArea;

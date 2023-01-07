import React, { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  id: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  hidden?: boolean;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  register,
  value,
  hidden,
  onChange,
}: iInputProps) => {
  return (
    <>
      <label hidden={hidden} htmlFor={id}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
    </>
  );
};

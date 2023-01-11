import React, { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./style";

interface iInputProps {
  id: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  hidden?: boolean;
  register?: UseFormRegisterReturn;
  value?: string;
  defaultValue?: number | string;
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
  defaultValue,
  onChange,
}: iInputProps) => {
  return (
    <StyledInput>
      {type === "checkbox" ? (
        <>
          <input
            defaultValue={defaultValue}
            onChange={onChange}
            value={value}
            type={type}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            {...register}
          />
          <label hidden={hidden} htmlFor={id}>
            {label}
          </label>
        </>
      ) : (
        <>
          <label hidden={hidden} htmlFor={id}>
            {label}
          </label>
          <input
            defaultValue={defaultValue}
            onChange={onChange}
            value={value}
            type={type}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            {...register}
          />
        </>
      )}
    </StyledInput>
  );
};

import React, { FormEvent } from "react";

type InputProps = {
  type: string;
  id: string;
  name: string;
  value: string;
  onchange: (event: FormEvent) => any;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  onchange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
    />
  );
};

import React, { FormEvent } from "react";
import "./styles.scss";

type InputProps = {
  type: string;
  id: string;
  name: string;
  value: string;
  onchange: (event: FormEvent) => any;
  placeholder: string;
  width: string;
};

export const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  onchange,
  placeholder,
  width,
}) => {
  return (
    <input
      style={{ width: width }}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
    />
  );
};

import React, { FormEvent, ReactNode } from "react";
import "./styles.scss";

type FormProps = {
  children: ReactNode;
  onSubmit?: (event: FormEvent) => void;
};

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form className="formContainer" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

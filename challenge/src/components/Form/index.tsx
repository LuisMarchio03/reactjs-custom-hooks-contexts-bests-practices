import React, { ReactNode } from "react";

type FormProps = {
  children: ReactNode;
};

export const Form: React.FC<FormProps> = ({ children }) => {
  return <form className="formContainer">{children}</form>;
};

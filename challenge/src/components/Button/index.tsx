import React, { ReactNode } from "react";
import "./styles.scss";

type ButtonProps = {
  type: any;
  onclick?: () => void;
  children: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ type, onclick, children }) => {
  return (
    <button type={type} onClick={onclick}>
      {children}
    </button>
  );
};

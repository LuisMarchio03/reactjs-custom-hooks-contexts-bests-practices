import React, { ReactNode } from "react";

type ButtonProps = {
  type: any;
  onclick?: any;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type, onclick, children }) => {
  return (
    <button type={type} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;

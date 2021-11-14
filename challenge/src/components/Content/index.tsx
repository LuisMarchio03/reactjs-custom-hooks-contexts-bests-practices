import React, { ReactNode } from "react";
import "./styles.scss";

type ContentProps = {
  children: ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <main className="content">{children}</main>;
};

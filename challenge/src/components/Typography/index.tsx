import React from "react";
import "./styles.scss";

type TypographyProps = {
  title?: string;
  subtitle?: string;
};

export const Typography: React.FC<TypographyProps> = ({ title, subtitle }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </div>
  );
};

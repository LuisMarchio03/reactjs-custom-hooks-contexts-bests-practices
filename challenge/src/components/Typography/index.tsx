import React from "react";

type TypographyProps = {
  title?: string;
  subtitle?: string;
};

export const Typography: React.FC<TypographyProps> = ({ title, subtitle }) => {
  return (
    <>
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </>
  );
};

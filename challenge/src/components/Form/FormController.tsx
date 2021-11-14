import React from "react";
import { SendFormContextProvider } from "../../contexts/SendFormContext";

import { RegisterUser } from "./RegisterUser";

export const FormController: React.FC = () => {
  return (
    <SendFormContextProvider>
      <RegisterUser />
    </SendFormContextProvider>
  );
};

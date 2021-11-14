import React, { useContext, useState } from "react";
import {
  SendFormContext,
  SendFormContextProvider,
} from "../../contexts/SendFormContext";

import { RegisterUser } from "./RegisterUser";
import { RegisterPersonalData } from "./RegisterPersonalData";

export const FormController: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const { data } = useContext(SendFormContext);

  console.log(currentStage);
  console.log(data);

  return (
    <SendFormContextProvider>
      {currentStage === 0 && (
        <RegisterUser
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
        />
      )}
      {currentStage === 1 && <RegisterPersonalData />}
    </SendFormContextProvider>
  );
};

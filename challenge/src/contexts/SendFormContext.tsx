import { createContext, FormEvent, ReactNode } from "react";
import { useForm } from "../hooks/useForm";

// type SendFormContextValue = {
//   onSubmit: () => any;
// };

export const SendFormContext = createContext({});

type SendFormProviderProps = {
  children: ReactNode;
};

export const SendFormContextProvider = ({
  children,
}: SendFormProviderProps) => {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("Formulário enviado com sucesso");
  };

  return (
    <SendFormContext.Provider value={onSubmit}>
      {children}
    </SendFormContext.Provider>
  );
};

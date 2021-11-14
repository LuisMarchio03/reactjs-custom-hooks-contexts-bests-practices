import { createContext, FormEvent, ReactNode } from "react";
import { useForm } from "../hooks/useForm";

type SendFormContextData = {
  onSubmit: (event: FormEvent) => void;
};

export const SendFormContext = createContext({} as SendFormContextData);

type SendFormProviderProps = {
  children: ReactNode;
};

export const SendFormContextProvider = ({
  children,
}: SendFormProviderProps) => {
  const {
    data,
    setData,
    email,
    setEmail,
    pass,
    setPass,
    name,
    setName,
    age,
    setAge,
    cpf,
    setCpf,
    address,
    setAddress,
  } = useForm();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("Formulário enviado com sucesso");

    console.log(data);
  };

  return (
    <SendFormContext.Provider value={{ onSubmit }}>
      {children}
    </SendFormContext.Provider>
  );
};

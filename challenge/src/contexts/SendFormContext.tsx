import { createContext, FormEvent, ReactNode, useState } from "react";

type SendFormContextData = {
  data: object;
  setData: any;
  email: string;
  setEmail: any;
  pass: string;
  setPass: any;
  name: string;
  setName: any;
  age: string;
  setAge: any;
  cpf: string;
  setCpf: any;
  address: {
    cep: string;
    state: string;
    city: string;
    residence: string;
  };
  setAddress: any;
};

export const SendFormContext = createContext({} as SendFormContextData);

type SendFormProviderProps = {
  children: ReactNode;
};

export const SendFormContextProvider = ({
  children,
}: SendFormProviderProps) => {
  // Data
  const [data, setData] = useState({});

  // Register user
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Register personal data
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState({
    cep: "",
    state: "",
    city: "",
    residence: "",
  });

  return (
    <SendFormContext.Provider
      value={{
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
      }}
    >
      {children}
    </SendFormContext.Provider>
  );
};

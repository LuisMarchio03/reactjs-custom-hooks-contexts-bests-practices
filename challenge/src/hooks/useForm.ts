import { useEffect, useState } from "react";

export const useForm = () => {
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

  return {
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
  };
};

import React, { FormEvent, useContext, useEffect } from "react";
import { Form } from "..";
import { SendFormContext } from "../../../contexts/SendFormContext";
import { Button } from "../../Button";
import { Typography } from "../../Typography";
import { Input } from "../Input";

type RegisterUserProps = {
  currentStage: any;
  setCurrentStage: any;
};

export const RegisterUser: React.FC<RegisterUserProps> = ({
  currentStage,
  setCurrentStage,
}) => {
  const { data, setData, email, setEmail, pass, setPass } =
    useContext(SendFormContext);

  const registerUser = {
    email,
    pass,
  };

  const sendForm = (event: FormEvent) => {
    event.preventDefault();

    setCurrentStage(currentStage + 1);
    setData({ ...data, registerUser });
  };

  return (
    <>
      <Typography
        title="Formulário fase 01"
        subtitle="Cadastre os seus dados de login"
      />
      <Form onSubmit={sendForm}>
        <Input
          width="100%"
          type="email"
          id="email"
          name="email"
          value={email}
          onchange={(event: any) => setEmail(event.target.value)}
          placeholder="Digite o seu E-mail"
        />

        <Input
          width="100%"
          type="password"
          id="password"
          name="password"
          value={pass}
          onchange={(event: any) => setPass(event.target.value)}
          placeholder="Digite a sua senha"
        />

        <Button type="submit">Proximo</Button>
      </Form>
    </>
  );
};

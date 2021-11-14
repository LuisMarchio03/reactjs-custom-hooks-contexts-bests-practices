import React, { FormEvent, useEffect } from "react";
import { Form } from "..";
import { useForm } from "../../../hooks/useForm";
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
  const { data, setData, email, setEmail, pass, setPass } = useForm();

  const dataRegisterUser = {
    email,
    pass,
  };

  const nextForm = () => {
    setData({ ...data, dataRegisterUser });
    setCurrentStage(currentStage + 1);
  };

  return (
    <>
      <Typography
        title="Formulário fase 01"
        subtitle="Cadastre os seus dados de login"
      />
      <Form
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          nextForm();
        }}
      >
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

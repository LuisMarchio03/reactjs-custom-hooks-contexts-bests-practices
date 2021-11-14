import React, { FormEvent, useContext, useState } from "react";
import { Form } from "..";
import { SendFormContext } from "../../../contexts/SendFormContext";
import { useForm } from "../../../hooks/useForm";
import Button from "../../Button";
import { Typography } from "../../Typography";
import { Input } from "../Input";

export const RegisterUser: React.FC = () => {
  const { email, setEmail, pass, setPass } = useForm();
  const { onSubmit: sendForm } = useContext(SendFormContext);

  console.log(email);
  console.log(pass);

  return (
    <>
      <Typography
        title="Formulário fase 01"
        subtitle="Cadastre os seus dados de login"
      />
      <Form onSubmit={sendForm}>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onchange={(event: any) => setEmail(event.target.value)}
          placeholder="Digite o seu E-mail"
        />

        <Input
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

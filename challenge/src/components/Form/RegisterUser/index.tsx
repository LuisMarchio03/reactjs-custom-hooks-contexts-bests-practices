import React, { useContext, useState } from "react";
import { Form } from "..";
import { SendFormContext } from "../../../contexts/SendFormContext";
import { useForm } from "../../../hooks/useForm";
import Button from "../../Button";
import { Input } from "../Input";

export const RegisterUser: React.FC = () => {
  const { email, setEmail, pass, setPass } = useForm();
  const {} = useContext(SendFormContext);

  console.log(email);
  console.log(pass);

  return (
    <Form>
      <Input
        type="email"
        id="email"
        name="email"
        value={email}
        onchange={(event) => setEmail("teste")}
        placeholder="Digite o seu E-mail"
      />

      <Input
        type="password"
        id="password"
        name="password"
        value={pass}
        onchange={(event) => setPass("teste")}
        placeholder="Digite a sua senha"
      />

      <Button type="submit">Proximo</Button>
    </Form>
  );
};

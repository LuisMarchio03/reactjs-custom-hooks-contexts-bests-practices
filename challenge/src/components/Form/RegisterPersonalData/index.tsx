import React from "react";
import { useForm } from "../../../hooks/useForm";
import { Form } from "..";
import { Typography } from "../../Typography";
import { Input } from "../Input";

export const RegisterPersonalData: React.FC = () => {
  const { name, setName, age, setAge, cpf, setCpf, address, setAddress } =
    useForm();

  return (
    <>
      <Typography
        title="Formulário fase 02"
        subtitle="Cadastre os seus dados pessoais"
      />
      <Form onSubmit={() => console.log("te")}>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onchange={(event: any) => setName(event.target.value)}
          placeholder="Digite o seu nome"
        />
        <Input
          type="text"
          id="age"
          name="age"
          value={age}
          onchange={(event: any) => setAge(event.target.value)}
          placeholder="Digite a sua idade"
        />
        <Input
          type="text"
          id="cpf"
          name="cpf"
          value={cpf}
          onchange={(event: any) => setCpf(event.target.value)}
          placeholder="Digite o seu CPF"
        />
        <Input
          type="text"
          id="residence"
          name="residence"
          value={address.residence}
          onchange={(event: any) =>
            setAddress({ ...address, residence: event.target.value })
          }
          placeholder="Digite o endereço da sua residência"
        />

        <Input
          type="text"
          id="city"
          name="city"
          value={address.city}
          onchange={(event: any) =>
            setAddress({ ...address, city: event.target.value })
          }
          placeholder="Digite o nome da cidade em que você mora"
        />
        <Input
          type="text"
          id="cep"
          name="cep"
          value={address.cep}
          onchange={(event: any) =>
            setAddress({ ...address, cep: event.target.value })
          }
          placeholder="Digite o CEP da sua residência"
        />
        <Input
          type="text"
          id="residence"
          name="residence"
          value={address.state}
          onchange={(event: any) =>
            setAddress({ ...address, state: event.target.value })
          }
          placeholder="Digite o estado onde você mora"
        />
      </Form>
    </>
  );
};

import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No minímo 6 caracteres')
    .required('A senha é obrigatoria'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu E-mail" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já Tenho Login</Link>
      </Form>
    </>
  );
}

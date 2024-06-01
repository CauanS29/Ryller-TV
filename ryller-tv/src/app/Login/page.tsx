'use client';
import { useEffect } from 'react';

const redirectTo = (url: string) => {
  window.location.href = url;
};

import Form from '../shared/components/Form/Form';

const TelaLogin: React.FC = () => {

  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    console.log('Email:', email);
    console.log('Password:', password);

    // Aqui você pode adicionar lógica adicional, como chamar uma API de login

    // Redirecionar após a validação e submissão bem-sucedida
    redirectTo('/Login');
  };

  return (
    <main className="flex items-center justify-center bg-blue-900 w-full h-screen">
      <div className="bg-gray-800 w-[411px] h-[405px] rounded-[8px] py-3 px-2 flex flex-col items-center justify-center">
        <fieldset className="mb-4 text-lg text-white font-semi-bold leading-[26px]">
          Entrar na sua Conta
        </fieldset>
        <Form onSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default TelaLogin;

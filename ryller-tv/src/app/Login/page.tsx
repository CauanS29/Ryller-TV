'use client';
import { LoginService } from '@/src/services/LoginServices/loginServices';

const redirectTo = (url: string) => {
  window.location.href = url;
};

import Form from '../shared/components/Form/Form';

const TelaLogin: React.FC = () => {
  
  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    try {
      console.log('Email:', email);
      console.log('Password:', password);
      await LoginService.Login({email,password})
      redirectTo('/');
    } catch (error) {
      console.error(error)
    }
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

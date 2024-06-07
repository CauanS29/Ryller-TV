'use client';
import { LoginService } from '@/src/services/LoginServices/loginServices';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Button from '../shared/components/Button/Button';
import Input from '../shared/components/Input/Input';

const schema = z.object({
  username: z.string().min(3, 'O nome de usuário deve ter pelo menos 3 caracteres').nonempty('O nome de usuário é obrigatório'),
  email: z.string().email('Email inválido').nonempty('O email é obrigatório'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres').nonempty('A senha é obrigatória')
});

type FormFields = z.infer<typeof schema>

const redirectTo = (url: string) => {
  window.location.href = url;
};

const Register: React.FC = () => {
  const {
    register, 
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

const[username, setUsername] = useState('')
   const handleSubmitRegister = async ({ email, password, username }: FormFields) => {
    try {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Username:', username);
      redirectTo('/');
    } catch (error) {
      console.error(error)
      setError("root", {
        message: "Esse usuário já existe.",
      });
    }
  };

  return (
    <main className="flex items-center justify-center bg-blue-900 w-full h-screen">
      <div className="bg-gray-800 w-[411px] h-[405px] rounded-[8px] py-3 px-2 flex flex-col items-center justify-center">
        <fieldset className="mb-4 text-lg text-white font-semi-bold leading-[26px]">
          Crie a sua conta
        </fieldset>
        <form noValidate className="gap-2" onSubmit={handleSubmit(handleSubmitRegister)}>
          <Input
            id="username"
            {...register("username")}
            placeHolder="Digite seu usuario"
            label="Username"
            onChange={e => setUsername (e.target.value)}
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          
          <Input
            id="email"
            {...register("email")}
            placeHolder="Digite seu email"
            label="Email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          
          <Input
            id="password"
            {...register("password")}
            placeHolder="Digite sua senha"
            label="Senha"
            type="password"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          
          <Button disabled={isSubmitting} type="submit"> <p>Criar</p></Button>
          {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        </form>
      </div>
    </main>
  );
};

export default Register;

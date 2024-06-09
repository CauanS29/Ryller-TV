'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { LoginService } from '@/src/services/LoginServices/loginServices';
import Button from '../shared/components/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';

const redirectTo = (url: string) => {
  window.location.href = url;
};

const schema = z.object({
  email: z.string().email({ message: "Email inválido." }),
  password: z.string().min(8, 'A senha deve ter no minímo 8 caracteres.'),
});

type FormFieldsLogin = z.infer<typeof schema>;

const TelaLogin: React.FC = () => {  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFieldsLogin>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFieldsLogin> = async ({ email, password }) => {
    try {
    /*   console.log('Email:', email);
      console.log('Password:', password); */
      //await LoginService.Login({ email, password });
      redirectTo('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex items-center justify-center bg-blue-900 w-full h-screen">
      <div className="bg-gray-800 w-[411px] h-[405px] rounded-[8px] py-3 px-2 flex flex-col items-center justify-center">
        <fieldset className="mb-4 text-lg text-white font-semi-bold leading-[26px]">
          Entre na sua Conta
        </fieldset>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 mt-1 px-3 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'>
        <input  
          {...register("email")} 
          type="text" 
          placeholder="Email" 
          className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-700"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email?.message}</div>
          )}
        </div>
         <div className='mb-4 mt-1 px-3 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' >
         <input 
          {...register("password")} 
          type="password" 
          placeholder="Senha" 
          className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-700"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password?.message}</div>
          )}
         </div>
          <Button disabled={isSubmitting} type='submit'>
            {isSubmitting ? "Loading..." : "Submit"}
          </Button>
          {errors.root && <div className="text-red-500">{errors.root?.message}</div>}
        </form>
      </div>
    </main>
  );
};

export default TelaLogin;

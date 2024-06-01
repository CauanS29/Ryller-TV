'use client';
import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import * as yup from 'yup';

interface FormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const validacao = yup.object().shape({
  email: yup.string().email().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória').min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

interface InputErrors {
  email?: string;
  password?: string;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<InputErrors>({});

 

  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await validacao.validate({ email, password }, { abortEarly: false });
      setError({});
      onSubmit({ email, password });
    } catch (err) {
      if (err instanceof yup.ValidationError) { 
        const validationErrors: InputErrors = {};
        err.inner.forEach((validationError: yup.ValidationError) => {
          validationErrors[validationError.path as keyof InputErrors] = validationError.message;
        });
        setError(validationErrors);
      }
    }
  }
  

  return (
    <div className="flex items-center justify-center">
      <form className="gap-2" onSubmit={handleSubmit}>
        <Input id="email" placeHolder="Digite seu email" onChange={e => setEmail(e.target.value)} value={email} label="Email" />
        {error.email && <p>{error.email}</p>}
        <Input id="password" placeHolder="Digite sua senha" onChange={e => setPassword(e.target.value)} value={password} label="Senha" />
        {error.password && <p>{error.password}</p>}
        <Button type="submit"><p>Entrar</p></Button>
       
      </form>
    </div>
  );
};

export default Form;

'use client';
import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ href, children, disabled, onClick, type = 'button' }) => {
  return href ? (
    <Link href={href} passHref>
      <button 
        onClick={onClick}
        disabled={disabled}
        className="w-full bg-gradient-to-r from-neutral-100/60 to-black/25
                  bg-transparent p-2 outline-none border-neutral-100/60 border-[1px]
                  rounded-xl hover:border-blue-400 focus:border-blue-400
                  focus:from-blue-400/60 text-neutral-100 placeholder:text-neutral-100/70">
        {children}
      </button>
    </Link>
  ) : (
    <button 
    onClick={onClick}
      type={type}
      disabled={disabled}
      className="w-full bg-gradient-to-r from-neutral-100/60 to-black/25
                bg-transparent p-2 outline-none border-neutral-100/60 border-[1px]
                rounded-xl hover:border-blue-400 focus:border-blue-400
                focus:from-blue-400/60 text-neutral-100 placeholder:text-neutral-100/70">
      {children}
    </button>
  );
};

export default Button;

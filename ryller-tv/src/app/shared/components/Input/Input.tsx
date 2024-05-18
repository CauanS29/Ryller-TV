import React from 'react';

interface InputProps {
    id: string;
    label: string;
    placeHolder: string;
    type?: string;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
}

const Input: React.FC<InputProps> = ({ id, label, placeHolder, type = "text", className, onChange, value }) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={id} className="block text-sm font-medium">
                {label}
            </label>
            <input 
            
                type={type}
                placeholder={placeHolder}
                id={id}
                value={value}
                className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-700"
                onChange={onChange} // Aqui passamos a prop onChange
                required
            />
        </div>
    );
};

export default Input;

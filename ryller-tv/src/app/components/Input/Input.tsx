interface InputProps {
    id: string;
    label: string;
    placeHolder: string;
    type?: string;
}

export default function Input({ id, label, placeHolder, type = "text" }: InputProps) {
    return (
        <div>
            l<label htmlFor={id}>
                {label}
            </label>/
            <input
                type={type}
                placeholder={placeHolder}
                id={id}
                onChange={(event) => console.log(event.target.value)}
                required
            />
        </div>
    )
}
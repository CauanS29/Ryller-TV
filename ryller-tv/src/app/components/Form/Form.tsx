"use client";

import Input from "../Input/Input"
export default function Form() {
    function onHandleSave(event: React.FormEvent) {
        event.preventDefault();
    }

    return (
        <form onSubmit={onHandleSave}>
            <Input
                id="e-mail"
                label="E-mail"
                placeHolder="Informe seu e-mail"
            />
            <Input
                id="password"
                label="password"
                placeHolder="Informe sua senha"
            ></Input>
        </form>
    )
}
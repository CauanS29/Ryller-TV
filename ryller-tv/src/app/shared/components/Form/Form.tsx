'use client'
import Input from "../Input/Input"
import { useState } from "react"
import Button from "../Button/Button"
export default function Form(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    return(
        <div className="flex items-center justify-center">
            <form>
                <Input id="input-Email" label="EMAIL:*" placeHolder="digite seu Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <Input id="input-Password" label="SENHA:*" placeHolder="digite sua Senha" onChange={(e) => setPassword(e.target.value)} value={password} />
            </form>
        </div>
    )
}

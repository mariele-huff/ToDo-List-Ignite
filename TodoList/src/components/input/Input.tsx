import { InputHTMLAttributes } from "react";
import style from './style.module.css'
export const Input = ({...props}:InputHTMLAttributes<HTMLInputElement>) => 
{
    return(
        <input 
            placeholder="Adicione uma nova tarefa"
            className={style.input} 
            {...props} 
        />
    )
}
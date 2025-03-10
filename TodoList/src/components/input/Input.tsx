import { HTMLAttributes } from "react";
import style from './style.module.css'
export const Input = ({...props}:HTMLAttributes<HTMLInputElement>) => 
{
    return(
        <input 
            placeholder="Adicione uma nova tarefa"
            className={style.input} {...props} 
        />
    )
}
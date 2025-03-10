import { HTMLAttributes } from "react";
import { PlusCircle, Trash } from "@phosphor-icons/react"
import style from './style.module.css'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type: 'create' | 'delete'
}
export const Button = ({ type, ...props }: ButtonProps) => {
    return (
        <button {...props} className={type == 'create' ? style.createButton : style.trashButton}>
            {type == 'create' ? "Criar" : ""}
            {type == 'create' ? <PlusCircle size={16} className={style.icon} weight="bold" /> :
                <Trash size={24} className={style.icon} weight="bold" />}
        </button>
    )
}
import { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>  {
    type : 'create' | 'delete' 
}
export const Button = ({type, ...props} : ButtonProps) => {
    return (
        <button>

        </button>
    )
}
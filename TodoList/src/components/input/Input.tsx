import { HTMLAttributes } from "react";
export const Input = ({...props}:HTMLAttributes<HTMLInputElement>) => 
{
    return(
        <input {...props} />
    )
}
import style from './style.module.css'
interface CountProps {
    name : string,
    value: number, 
    color: 'blue' | 'purple'
}

export const Count = ( {name, value, color } : CountProps ) => {
    return(
        <div>
            <p>{name}</p>
            <p>{value}</p>
        </div>
    )
}
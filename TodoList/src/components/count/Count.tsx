import style from './style.module.css'
interface CountProps {
    name : string,
    value: number, 
    color: 'blue' | 'purple'
}

export const Count = ( {name, value, color } : CountProps ) => {
    return(
        <div className={style.countContainer}>
            <p className={ color == 'purple' ? style.countNamePurple : style.countNameBlue}>{name}</p>
            <p className={style.countValue}>{value}</p>
        </div>
    )
}
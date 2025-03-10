
interface CountProps {
    name : string,
    value: number
}

export const Count = ( {name, value} : CountProps ) => {
    return(
        <div>
            <p>{name}</p>
            <p>{value}</p>
        </div>
    )
}
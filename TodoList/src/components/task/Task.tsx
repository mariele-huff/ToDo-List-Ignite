
import { Circle, CheckCircle } from "@phosphor-icons/react"
import style from './style.module.css'
import { Button } from "../button/Button"

interface TaskProps {
    id: number,
    text : String,
    isChecked: boolean,
}

export const Task = ( { text, isChecked } : TaskProps ) => {
    return (
        <div className={style.taskContainer}>
            <div className={style.taskContent}>
                { isChecked ?  <CheckCircle className={style.circleCheck} /> : 
                    <Circle className={style.circle}/> }
                <p className={style.text}>{text}</p>  
            </div>
           <Button type="delete" />
        </div>
    )
}
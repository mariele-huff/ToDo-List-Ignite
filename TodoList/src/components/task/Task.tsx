
import { Circle, CaretCircleDown } from "@phosphor-icons/react"
import style from './style.module.css'
import { Button } from "../button/Button"
import { useEffect, useState } from "react"

export interface TaskProps {
    id: number,
    text: String
}

export type TaskType = {
    task: TaskProps,
    countChecked: number;
    setCountChecked: (count: number) => void;
}


export const Task = ({ task, setCountChecked, countChecked }: TaskType) => {
    const [checked, setChecked] = useState<boolean>(false);

    const handleCheck = () => {
        setChecked(!checked)
        setCountChecked(countChecked + (!checked ? 1 : -1))
    }

    return (

        <div className={style.taskContainer}>
            <div className={style.taskContent}>
                {checked ? <CaretCircleDown className={style.circleCheck} weight="fill" onClick={handleCheck} /> :
                    <Circle className={style.circle} weight="duotone" onClick={handleCheck} />}
                <p className={checked ? style.textUnderline : style.text}>{task.text}</p>
            </div>
            <Button type="delete" />
        </div>
    )
}
import { useEffect, useState } from 'react'
import clipboardImage from '../../assets/Clipboard.svg'
import { Task, TaskProps } from '../task/Task'
import style from './style.module.css'

type TaskListProps = {
    taskListArray: TaskProps[]
    handleCountCreatedTasks: (count: number) => void;
    handleCountConcludedTasks: (count: number) => void;
}

export const TaskList = ({
    taskListArray,
    handleCountConcludedTasks,
    handleCountCreatedTasks }: TaskListProps) => {

    const [countChecked, setCountChecked] = useState<number>(0);

    useEffect(() => {
        handleCountConcludedTasks(countChecked)
        handleCountCreatedTasks(taskListArray.length - countChecked)
    }, [countChecked, taskListArray])

    return (
        <div className={style.taskListContainer}>
            {taskListArray != null ? taskListArray?.map(task => {
                return <Task
                    key={task.id}
                    task={{ id: task.id, text: task.text }}
                    countChecked={countChecked}
                    setCountChecked={setCountChecked}
                />
            }
            ) :

                <>
                    <img src={clipboardImage} className={style.emptyImage} />
                    <div>
                        <p className={style.infoTextBold}>Você ainda não tem tarefas cadastradas</p>
                        <p className={style.infoText}>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </>

            }
        </div>
    )
}
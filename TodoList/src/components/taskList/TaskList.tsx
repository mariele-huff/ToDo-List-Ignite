import { useEffect, useState } from 'react'
import clipboardImage from '../../assets/Clipboard.svg'
import { Task, TaskProps } from '../task/Task'
import style from './style.module.css'

type TaskListProps = {
    chengeTaskList: ( TaskList :  Array<TaskProps>) => void;
    taskListArray: TaskProps[]
    handleCountCreatedTasks: (count: number) => void;
    handleCountConcludedTasks: (count: number) => void;
}
export const TaskList = ({
    chengeTaskList,
    taskListArray,
    handleCountConcludedTasks,
    handleCountCreatedTasks }: TaskListProps) => {

    const [countChecked, setCountChecked] = useState<number>(0);

    useEffect(() => {
        handleCountConcludedTasks(countChecked)
        handleCountCreatedTasks(taskListArray.length != 0 ? taskListArray.length - countChecked : 0)
    }, [countChecked, taskListArray])

    const handleDelete = ( key: number ) => 
    {
        chengeTaskList( taskListArray.filter( task => task.id != key ) );
    }

    return (
        <div className={style.taskListContainer}>
            {taskListArray.length != 0 ? taskListArray.map(task => {
                return <Task
                    key={task.id}
                    task={{ id: task.id, text: task.text }}
                    countChecked={countChecked}
                    setCountChecked={setCountChecked}
                    handleDelete={handleDelete}
                />
            }
            ) :

                <div className={style.taskListContainerEmpty}>
                    <img src={clipboardImage} className={style.emptyImage} />
                    <div>
                        <p className={style.infoTextBold}>Você ainda não tem tarefas cadastradas</p>
                        <p className={style.infoText}>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>

            }
        </div>
    )
}
import clipboardImage from '../../assets/Clipboard.svg'
import { Task } from '../task/Task'
import style from './style.module.css'


export const TaskList = () => {
    const taskListArray = [
        {
            id: 1, 
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isCheckd : false
        }, 
        {
            id: 2, 
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isCheckd : false
        }, 
        {
            id: 3, 
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isCheckd : false
        }, 
        {
            id: 4, 
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isCheckd : false
        }
    ]
    
    return(
        <div className={style.taskListContainer}>
            {taskListArray != null ? taskListArray.map( task => 
                <Task 
                    id={task.id}
                    text={task.text} 
                    isChecked={task.isCheckd} 
                />
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
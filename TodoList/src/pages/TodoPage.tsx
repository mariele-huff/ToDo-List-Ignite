import { useState } from 'react';
import { Button } from '../components/button/Button';
import { Count } from '../components/count/Count';
import { Header } from '../components/header/Header';
import { Input } from '../components/input/Input';
import { TaskList } from '../components/taskList/TaskList';
import style from './style.module.css';
import { TaskProps } from '../components/task/Task';

export const TodoPage = () => {
    const [taskListArray, setTaskList] = useState<Array<TaskProps>>([
        {
            id: 1,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        },
        {
            id: 2,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        },
        {
            id: 3,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        },
        {
            id: 4,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        }
    ])
    const [createdTasks, setCreatedTasks] = useState<number>(0);
    const [concludedTasks, setConcludedTasks] = useState<number>(0);

    const [newTask, setNewTask] = useState<string>("");

    const handleNewTask = () => {
        if (!newTask.trim()) return;
      
        setTaskList([...taskListArray, { id: taskListArray.length + 1, text: newTask }]);
        setNewTask("");
      };

    return (
        <div>
            <Header />
            <div className={style.tasksContainer}>
                <div className={style.newTaskContainer}>
                    <Input
                        value={newTask}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
                    />
                    <Button type='create' onClick={handleNewTask}/>
                </div>
                <div className={style.taskListContainer}>
                    <div className={style.tasksInfoContainer}>
                        <Count name="Tarefas criadas" value={createdTasks} color='blue' />
                        <Count name="Concluídas" value={concludedTasks} color='purple' />
                    </div>
                    <div className={style.taskListContent}>
                        <TaskList
                            taskListArray={taskListArray}
                            handleCountConcludedTasks={setConcludedTasks}
                            handleCountCreatedTasks={setCreatedTasks}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
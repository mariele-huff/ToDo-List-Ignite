import { Button } from '../components/button/Button';
import { Count } from '../components/count/Count';
import { Header } from '../components/header/Header';
import { Input } from '../components/input/Input';
import style from './style.module.css';

export const TodoPage = () => {
    return (
        <div>
            <Header />
            <div className={style.tasksContainer}>
                <div className={style.newTaskContainer}>
                    <Input />
                    <Button type='create'/>
                </div>
                <div className={style.taskListContainer}>
                    <div className={style.tasksInfoContainer}>
                        <Count  name="Tarefas criadas" value={0} color='blue' />
                        <Count  name="Concluídas" value={0} color='purple' />
                    </div>
                </div>
            </div>
        </div>
    )
}
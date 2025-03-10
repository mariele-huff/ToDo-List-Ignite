import style from  './style.module.css'
import rocketImage from '../../assets/rocket.svg'
import todoLogo from '../../assets/todo.svg'
export const Header = () => {
    return (
        <div className={style.headerBody}>
            <img 
                src={rocketImage} 
                alt="rocket" 
                className={style.rocketImage}
            />
            <img 
                src={todoLogo} 
                alt="todoLogo" 
                className={style.logoImage}
            />
        </div>
    )
}
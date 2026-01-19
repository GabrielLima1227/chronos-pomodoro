import { useTaskContext } from '../../contexts/TaskContext';

import style from './style.module.css';

export function CountDown() {
    const taskContext = useTaskContext();
    console.log(taskContext);

    return (
        <>
            <nav className={style.container}>00:00</nav>
        </>
    );
}

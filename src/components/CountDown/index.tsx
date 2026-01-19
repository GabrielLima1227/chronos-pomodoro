import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import style from './style.module.css';

export function CountDown() {
    const { state } = useTaskContext();

    return (
        <>
            <nav className={style.container}>
                {state.formattedSecondsRemaining}
            </nav>
        </>
    );
}

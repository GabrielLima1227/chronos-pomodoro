import style from './style.module.css';

export function Cycles() {
    return (
        <>
            <div className={style.cycles}>
                <span>Ciclos</span>
                <div className={style.cyclesDots}>
                    <span className={`${style.cycleDot} ${style.workTime}`}></span>
                    <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
                    <span className={`${style.cycleDot} ${style.workTime}`}></span>
                    <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
                    <span className={`${style.cycleDot} ${style.workTime}`}></span>
                    <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
                    <span className={`${style.cycleDot} ${style.workTime}`}></span>
                    <span className={`${style.cycleDot} ${style.longBreakTime}`}></span>
                </div>
            </div>
        </>
    );
}

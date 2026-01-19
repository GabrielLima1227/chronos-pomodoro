import style from './style.module.css';
import type { HomeProps } from '../../pages/Home';

export function CountDown({state}: HomeProps) {
    return (
        <>
            <nav className={style.container}>{state.formattedSecondsRemaining}</nav>
        </>
    );
}

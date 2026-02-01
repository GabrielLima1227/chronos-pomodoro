import { TimerIcon } from 'lucide-react';
import style from './style.module.css';
import { RouterLink } from '../RouterLink';

export function Logo() {
    return (
        <>
            <div className={style.logo}>
                <RouterLink className={style.logoLink} href="/">
                    <TimerIcon />
                    <span>Chronos</span>
                </RouterLink>
            </div>
        </>
    );
}

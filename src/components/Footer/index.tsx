import style from './style.module.css';
import {RouterLink} from "../RouterLink";

export function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <RouterLink href="/about-pomodoro">Entenda Como Funciona a Técnica Pomodoro</RouterLink>
                <RouterLink href="/">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️</RouterLink>
            </footer>
        </>
    );
}
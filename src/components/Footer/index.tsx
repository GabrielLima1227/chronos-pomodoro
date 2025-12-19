import style from './style.module.css';

export function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <a href="#">Entenda Como Funciona a Técnica Pomodoro</a>
                <a href="#">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️</a>
            </footer>
        </>
    );
}

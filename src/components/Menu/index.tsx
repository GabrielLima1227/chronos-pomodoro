import { useState } from 'react';
import style from './style.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvaliableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // Não seguir o link
        console.log('Clicado', Date.now());
    }

    return (
        <>
            <h1>{theme}</h1>
            <nav className={style.menu}>
                <a
                    className={style.menuLink}
                    aria-label='Home'
                    title='Home'
                    href='#'
                >
                    <HouseIcon />
                </a>
                <a
                    className={style.menuLink}
                    aria-label='Histórico'
                    title='Histórico'
                    href='#'
                >
                    <HistoryIcon />
                </a>
                <a
                    className={style.menuLink}
                    aria-label='Configurações'
                    title='Configurações'
                    href='#'
                >
                    <SettingsIcon />
                </a>
                <a
                    className={style.menuLink}
                    aria-label='Tema'
                    title='Tema'
                    href='#'
                    onClick={handleThemeChange}
                >
                    <SunIcon />
                </a>
            </nav>
        </>
    );
}
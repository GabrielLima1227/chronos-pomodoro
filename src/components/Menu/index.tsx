import { useState, useEffect } from 'react';
import style from './style.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvaliableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // Não seguir o link
        // Atualiza o estado do tema usando a forma de função
        setTheme(prevTheme => {
            // 'prevTheme' é o valor atual do estado 'theme' que o React passa automaticamente
            // Você pode chamar esse parâmetro como quiser: 'current', 'valorAtual', etc.
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme; // Retorna o novo valor que o estado deve assumir
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        return () => {
            console.log('Cleanup do useEffect do tema');
        }
    }, [theme]); // Executa o efeito sempre que 'theme' mudar

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
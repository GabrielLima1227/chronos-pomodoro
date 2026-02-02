import { useState, useEffect } from 'react';
import style from './style.module.css';
import {
    HistoryIcon,
    HouseIcon,
    SettingsIcon,
    SunIcon,
    MoonIcon,
} from 'lucide-react';
import { RouterLink } from '../RouterLink';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvaliableThemes>(() => {
        // Função de inicialização para definir o estado inicial com base no localStorage
        const savedTheme = localStorage.getItem('theme') as
            | AvaliableThemes
            | 'dark';
        return savedTheme;
    });

    // Look Up table é uma estrutura de dados que mapeia chaves a valores
    // O objetivo das look up tables é substituir estruturas condicionais (if/else, switch) por uma forma mais simples e direta de acessar valores
    const nextIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
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
        // Salva a preferência do tema no localStorage
        localStorage.setItem('theme', theme);
    }, [theme]); // Executa o efeito sempre que 'theme' mudar

    return (
        <>
            <nav className={style.menu}>
                <RouterLink
                    className={style.menuLink}
                    aria-label='Home'
                    title='Home'
                    href='/'
                >
                    <HouseIcon />
                </RouterLink>
                <RouterLink
                    className={style.menuLink}
                    aria-label='Histórico'
                    title='Histórico'
                    href='/history'
                >
                    <HistoryIcon />
                </RouterLink>
                <RouterLink
                    className={style.menuLink}
                    aria-label='Configurações'
                    title='Configurações'
                    href='/settings'
                >
                    <SettingsIcon />
                </RouterLink>
                <RouterLink
                    className={style.menuLink}
                    aria-label='Tema'
                    title='Tema'
                    href='#'
                    onClick={handleThemeChange}
                >
                    {nextIcon[theme]}
                </RouterLink>
            </nav>
        </>
    );
}

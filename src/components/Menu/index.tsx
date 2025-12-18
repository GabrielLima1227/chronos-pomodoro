import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from 'lucide-react';

import style from './style.module.css';

export function Menu() {
    return (
        <>
            <nav className={style.menu}>
                <a className={style.menuLink} href="#">
                    <HouseIcon />
                </a>
                <a className={style.menuLink} href="#">
                    <HistoryIcon />
                </a>
                <a className={style.menuLink} href="#">
                    <SettingsIcon />
                </a>
                <a className={style.menuLink} href="#">
                    <SunIcon />
                </a>
            </nav>
            
        </>
    );
}

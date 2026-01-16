import type React from 'react';
import style from './style.module.css';

type GenericHtmlProps = {
    children: React.ReactNode;
};
export function GenericHtml({ children }: GenericHtmlProps) {
    return (
        <>  
            <div className={style.genericHtml}>
                {children}
            </div>
        </>
    );
}

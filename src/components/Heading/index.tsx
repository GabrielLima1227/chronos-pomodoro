import type React from 'react';
import style from './style.module.css';

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children } : HeadingProps) {
    return (
        <>
        <h1 className={style.heading}>{children}</h1>
        </>
    );
}

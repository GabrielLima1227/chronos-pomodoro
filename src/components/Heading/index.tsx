import type React from 'react';
import style from './style.module.css';

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children } : HeadingProps) {
    return (
        // Isso é um React Fragment, que permite retornar múltiplos elementos sem adicionar nós extras ao DOM
        // Isso significa que não vai ser preciso criar uma div ou outro elemento desnecessário no HTML final
        // O React fragment é representado por <> e </>, e ele é importante para manter a estrutura do DOM limpa, pois o return do componente precisa ter apenas um elemento pai que agregue todos os outros elementos filhos.
        <>
        <h1 className={style.heading}>{children}</h1>
        </>
    );
}

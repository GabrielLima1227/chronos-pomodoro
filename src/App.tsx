import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Cycles } from './components/Cycles';
import { Footer } from './components/Footer';
import { PlayCircleIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/Defaultinput';
import { DefaultButton } from './components/DefaultButton';

// React Hooks
import { useState } from 'react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    // UseState: Quando o valor mudar, quero que todos os componentes que usam esse valor sejam atualizados automaticamente.
    // No React, o useState retorna um array com 2 posições: [valorAtual, funçãoParaAtualizarOValor]
    // Não podemos modificar o valor diretamente, precisamos usar a função para atualizar o valor.
    const [numero, setNumero] = useState(0); // Desestruturação de array

    function handleClick() {
        // É uma boa prática usar uma função e não uma atribuição direta
        setNumero(prevState => prevState + 1);
    }

    return (
        <>
            <Heading>
                Número: <span>{numero}</span>
            </Heading>
            <button onClick={handleClick}>Aumentar</button>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form className='form' action=''>
                    <div className='formRow'>
                        <DefaultInput
                            id='meuInput'
                            type='text'
                            placeholder='Digite Algo'
                            labelText={numero.toString()}
                            title='sdasd'
                        />
                    </div>
                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='formRow'>
                        <Cycles />
                    </div>
                    <div className='formRow'>
                        <DefaultButton
                            icon={<PlayCircleIcon />}
                            color='green'
                        />
                    </div>
                </form>
            </Container>
            <Container>
                <Footer />
            </Container>
        </>
    );
}

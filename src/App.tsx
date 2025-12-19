import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Cycles } from './components/Cycles';
import { Footer } from './components/Footer'; 
import { PlayCircleIcon} from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/Defaultinput';
import { DefaultButton } from './components/DefaultButton';

import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';


export function App() {
    let numero = 0;

    function handleClick() {
        const span = document.getElementById('numero');
        if (!span) return;

        numero += 1;
        span.innerText = numero.toString();
        console.log(numero, Date.now());
    }

    return (
        <>
            <Heading>
                Número: <span id='numero'>{numero}</span>
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
                <form className='form' action="">
                    <div className="formRow">
                        <DefaultInput id='meuInput' type="text" placeholder="Digite Algo" labelText={numero.toString()} title='sdasd'/>
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="formRow">
                        <Cycles />
                    </div>
                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} color='green'/>
                    </div>
                </form>
            </Container>
            <Container>
                <Footer />
            </Container>
        </>
    );
}

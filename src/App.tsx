import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Cycles } from './components/Cycles';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/Defaultinput';
import { DefaultButton } from './components/DefaultButton';

import './styles/theme.css';
import './styles/global.css';


export function App() {
    return (
        <>
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
                        <DefaultInput id='meuInput' type="text" placeholder="Digite Algo" labelText='task' title='sdasd'/>
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="formRow">
                        <Cycles />
                    </div>
                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} color='green'/>
                        <DefaultButton icon={<StopCircleIcon />} color='red'/>
                    </div>
                </form>
            </Container>
        </>
    );
}

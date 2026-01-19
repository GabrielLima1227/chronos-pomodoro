import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import type { HomeProps } from '../../pages/Home';

import style from './style.module.css';

export function MainForm({state}: HomeProps) {
    return (
        <form className='form' action=''>

            <div className='formRow'>
                <DefaultInput
                    id='meuInput'
                    type='text'
                    placeholder='Digite Algo'
                    labelText='task'
                    title='sdasd'
                />
            </div>
            <div className='formRow'>
                <p>Próximo intervalo é de {state.config.workTime}</p>
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
    );
}
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';

import style from './style.module.css';

export function MainForm() {
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
    );
}
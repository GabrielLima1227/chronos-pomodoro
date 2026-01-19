import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';

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
                <p>Próximo intervalo é de 25 Minutos</p>
            </div>
            <div className='formRow'>
                <Cycles />
            </div>
            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </div>
        </form>
    );
}

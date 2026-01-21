import { useRef } from 'react';
import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { getNextCycle } from '../../utils/getNextCycle';
import type { TaskModel } from '../../models/TaskModel';
import {useTaskContext} from '../../contexts/TaskContext/useTaskContext'
import { getNextCycleTime } from '../../utils/getNextCycleTime';

export function MainForm() {
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);
    
    // Cycles
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleTime(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Digite o nome da tarefa')
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            duration: 1,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            type: nextCycleType
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask],
                secondsRemaining: secondsRemaining, // Conferir Depois
                formattedSecondsRemaining: '00:00', // Conferir Depois
                activeTask: newTask,
                currentCycle: nextCycle,
                config: {...prevState.config}
            };
        });
    }

    return (
        <form onSubmit={handleCreateNewTask} className='form' action=''>
            <div className='formRow'>
                <DefaultInput
                    id='meuInput'
                    type='text'
                    placeholder='Digite Algo'
                    labelText='task'
                    title='sdasd'
                    ref={taskNameInput}
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

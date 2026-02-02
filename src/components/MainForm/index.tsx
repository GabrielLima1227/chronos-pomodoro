import { useRef } from 'react';
import { Cycles } from '../Cycles';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { getNextCycle } from '../../utils/getNextCycle';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import {showMessage} from '../../adapters/showMessage'

export function MainForm() {
    const { state, dispatch } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);
    const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

    // Cycles
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        showMessage.dissmiss();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            showMessage.warn('Digite o nome da tarefa');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            duration: state.config[nextCycleType],
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            type: nextCycleType,
        };

        dispatch({
            type: TaskActionTypes.START_TASK,
            payload: newTask,
        });
        showMessage.success('Tarefa Iniciada!');
    }

    function handleInterruptTask() {
        showMessage.dissmiss();
        showMessage.error("Tarefa Interrompida!");
        dispatch({
            type: TaskActionTypes.INTERRUPT_TASK,
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
                    disabled={!!state.activeTask}
                    defaultValue={lastTaskName}
                />
            </div>
            <div className='formRow'>
                <Tips />
            </div>

            {state.currentCycle > 0 && (
                <div className='formRow'>
                    <Cycles />
                </div>
            )}

            <div className='formRow'>
                {!state.activeTask && (
                    <DefaultButton
                        type={'submit'}
                        icon={<PlayCircleIcon />}
                        color='green'
                        aria-label='Iniciar nova tarefa'
                        title='Iniciar nova tarefa'
                        key='botao_submit'
                    />
                )}
                {!!state.activeTask && (
                    <DefaultButton
                        onClick={handleInterruptTask}
                        type={'button'}
                        icon={<StopCircleIcon />}
                        color='red'
                        aria-label='Interromper tarefa atual'
                        title='Interromper tarefa atual'
                        key='botao_button'
                    />
                )}
            </div>
        </form>
    );
}

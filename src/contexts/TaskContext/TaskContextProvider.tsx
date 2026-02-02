import { useEffect, useReducer, useRef } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
        const storedState = localStorage.getItem('state');
        if (!storedState) {
            return initialTaskState;
        }

        const parsedState = JSON.parse(storedState) as  TaskStateModel;

        return {
            ...parsedState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00',
        };
    });

    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

    const worker = TimerWorkerManager.getInstance();

    useEffect(() => {
        worker.onmessage((e: MessageEvent) => {
            const countDownSeconds = e.data;

            if (countDownSeconds <= 0) {
                if (playBeepRef.current) {
                    playBeepRef.current();
                    playBeepRef.current = null;
                }
                dispatch({ type: TaskActionTypes.COMPLETE_TASK });
                worker.terminate();
            } else {
                dispatch({
                    type: TaskActionTypes.COUNT_DOWN,
                    payload: { secondsRemaining: countDownSeconds },
                });
            }
        });
    }, [worker]);

    useEffect(() => {
        // Estado Mudou 
        localStorage.setItem('state', JSON.stringify(state));

        if (!state.activeTask) {
            worker.terminate();
        }

        document.title = `${state.formattedSecondsRemaining} - ${state.tasks[state.tasks.length - 1]?.name || 'Chronos Pomodoro'}`;
        worker.postMessage(state);
    }, [state, worker]);

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        } else {
            playBeepRef.current = null;
        }
    }, [state.activeTask]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

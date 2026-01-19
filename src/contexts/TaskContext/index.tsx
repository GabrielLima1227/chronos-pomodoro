import React, { createContext, useContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
};

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

type TaskContextProviderProps = {
    children: React.ReactNode;
};

const initialContextValue = {
    state: initialState,
    setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    return (
        <>
            <TaskContext.Provider value={{...initialContextValue}}>
                {children}
            </TaskContext.Provider>
        </>
    );
}

export function useTaskContext() {
    return useContext(TaskContext);
}

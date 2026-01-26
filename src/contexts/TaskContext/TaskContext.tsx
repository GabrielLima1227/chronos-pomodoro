import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import {createContext} from 'react'
import type { TaskActionModel } from './taskActions';

export type TaskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
};

export const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

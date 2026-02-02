import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

// Define as constantes que existem em runtime
export const TaskActionTypes = {
    START_TASK: 'START_TASK',
    INTERRUPT_TASK: 'INTERRUPT_TASK',
    RESET_STATE: 'RESET_STATE',
    COUNT_DOWN: 'COUNT_DOWN',
    COMPLETE_TASK: 'COMPLETE_TASK',
    CHANGE_SETTINGS: 'CHANGE_SETTINGS',
} as const;

// Cria o tipo das ações a partir do objeto acima
export type TaskActionType = (typeof TaskActionTypes)[keyof typeof TaskActionTypes];

// Define o tipo das actions
export type TaskActionModel =
    | { type: typeof TaskActionTypes.START_TASK; payload: TaskModel }
    | { type: typeof TaskActionTypes.INTERRUPT_TASK }
    | { type: typeof TaskActionTypes.RESET_STATE }
    | {type: typeof TaskActionTypes.COUNT_DOWN; payload: { secondsRemaining:number };}
    | { type: typeof TaskActionTypes.COMPLETE_TASK }
    | { type: typeof TaskActionTypes.CHANGE_SETTINGS; payload: Partial<TaskStateModel['config']> };

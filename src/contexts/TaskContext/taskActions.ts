import type { TaskModel } from '../../models/TaskModel';

// Define as constantes que existem em runtime
export const TaskActionTypes = {
    START_TASK: 'START_TASK',
    INTERRUPT_TASK: 'INTERRUPT_TASK',
    RESET_STATE: 'RESET_STATE',
} as const;

// Cria o tipo das ações a partir do objeto acima
export type TaskActionType = (typeof TaskActionTypes)[keyof typeof TaskActionTypes];

// Define o tipo das actions
export type TaskActionModel =
    | { type: typeof TaskActionTypes.START_TASK; payload: TaskModel }
    | { type: typeof TaskActionTypes.INTERRUPT_TASK; payload: TaskModel }
    | { type: typeof TaskActionTypes.RESET_STATE };

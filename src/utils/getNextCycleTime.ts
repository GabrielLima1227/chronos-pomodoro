// import type { TaskStateModel } from '../models/TaskStateModel';
// keyof TaskStateModel['config']

import type { TaskModel } from '../models/TaskModel';

export function getNextCycleTime(currentCycle: number): TaskModel['type'] {
    if (currentCycle % 8 === 0) return 'longBreakTime';
    if (currentCycle % 2 === 0) return 'shortBreakTime';
    return 'workTime';
}
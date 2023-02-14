export type Task = {
    title: string,
    isDone: boolean,
    id: string,
    isMainTask: boolean
}



export interface PomodoroState {
    timestampStart: Date;
    timestampEnd: Date | null;
    task: Task | null;
    stillRunning: boolean;
    hasStarted: boolean;
    isPaused: boolean;
    doneInTime: boolean;
    isDone: boolean
}
export interface PomodoroContextState {
    activePomodoros: Array<PomodoroState>,
    inactivePomodoros: Array<PomodoroState>,
    allDone: boolean
}
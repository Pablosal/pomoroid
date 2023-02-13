export interface TimerFather {
    start: () => void
    pause: () => void
    stop: () => void
    startTime: Date;
    endTime: Date;
    pauseTime: Date;
}
export interface IChronometer {
    start: () => void
    pause: () => void
    stop: () => void

}
export interface ITimer {
    start: () => void
    pause: () => void
    stop: () => void
    allTasksDone: boolean
    tasks: Array<Task>
    tasksNotFinished: Array<Task>

}

type TimeRecord = {
    startTime: Date;
    endTime: Date;
    task: Task
}
type Task = {
    completed: boolean;
    name: string
}
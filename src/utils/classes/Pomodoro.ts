import { PomodoroState, Task } from "../types";

export class Pomodoro implements PomodoroState {
    timestampStart: Date;
    timestampEnd: Date;
    task: Task;
    stillRunning: boolean;
    hasStarted: boolean;
    isPaused: boolean;
    doneInTime: boolean;
    isDone: boolean
    constructor(timestampStart, task) {
        this.timestampStart = timestampStart
        this.timestampEnd = null
        this.task = task
        this.stillRunning = false
        this.hasStarted = false
        this.isPaused = true
        this.doneInTime = false
        this.isDone = false
    }

    Pause() {
        this.isPaused = true
        this.stillRunning = false
    }
    Unpause() {
        this.isPaused = false
        this.stillRunning = true
    }
    Finish() {
        this.stillRunning = false
        this.isDone = true
        this.timestampEnd = new Date()
    }
}
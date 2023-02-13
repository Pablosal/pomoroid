import { ITimer, TimerFather } from "../interfaces/Itimer";

export abstract class TimerCreator implements TimerFather {
    endTime: Date;
    pauseTime: Date;
    startTime: Date;
    constructor() {
        this.endTime = new Date()
        this.startTime = new Date()
        this.pauseTime = new Date()

    }
    start() {

    }
    pause() {

    }
    stop() {

    }
    public abstract timerCreator(): ITimer
    public log(): string {
        const timer = this.timerCreator()
        return ("a new timer has veen created")
    }
}
export class NewTask {
    title: string
    isDone: boolean
    id: string
    isMainTask: boolean
    constructor(title) {
        this.title = title
        this.isDone = false
        this.isMainTask = false
        this.id = crypto.randomUUID()
    }

    changeToMainTask() {
        this.isMainTask = true
    }
}
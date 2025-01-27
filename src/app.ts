interface Task {
    id: number
    descrption: string
    completed: boolean
}

let tasks: Task[] = []
let taskId = 0

const taskInput= document.getElementById("taskInput") as HTMLInputElement
const addTaskButton= document.getElementById("addTaskButton") as HTMLButtonElement
const taskList= document.getElementById("taskList") as HTMLUListElement

addTaskButton.addEventListener("click", () => 
{console.log ("coucou")
 })
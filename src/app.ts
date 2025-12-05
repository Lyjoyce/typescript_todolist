interface Task {
    id: number
    description: string
    completed: boolean
}

let tasks: Task[] = []
let taskId = 0

const taskInput= document.getElementById("taskInput") as HTMLInputElement
const addTaskButton= document.getElementById("addTaskButton") as HTMLButtonElement
const taskList= document.getElementById("taskList") as HTMLUListElement

addTaskButton.addEventListener("click", () => {
    const taskDescription = taskInput.value.trim()
    if(taskDescription){
        addTask(taskDescription)
        taskInput.value = ""
    }
 })

 function addTask(description:string):void {
    const newTask: Task = {
        id: taskId++,
        description,
        completed: false
    }
    tasks.push(newTask)
    renderTasks()
 }

function renderTasks(): void {
    taskList.innerHTML = ""
    tasks.forEach((task) => { 
        const taskItem = document.createElement("li")
        taskItem.textContent = task.description
        taskList.appendChild(taskItem)
    })
}
import { TaskProps, Task } from "./Task"

export const TaskCompleted: React.FC<TaskProps> = ({ task, onCompleted }) => {

    return (
        <Task task={task} onCompleted={onCompleted}>
            <button 
                className="toggle"
                onClick={() => { window.alert('La tarea ya esta completada') }}>
            </button>
        </Task>
    )
}
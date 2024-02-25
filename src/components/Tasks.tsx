import { type Task as TaskType } from "../interfaces/task.types"
import { TaskCompleted } from "./TaskCompleted"
import { TaskPending } from "./TaskPending"

interface TasksProps {
    tasks: TaskType[],
    onRemove: (id: number) => void,
    onCompleted: (task: Pick<TaskType, 'id' | 'completed'>) => void
}

const taskTypes = {
    completed: TaskCompleted,
    pending: TaskPending
}

export const Tasks: React.FC<TasksProps> = ({ tasks: tasks, onRemove, onCompleted }) => {
    
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                   { taskTypes[task.completed ? 'completed' : 'pending']({ task, onCompleted, onRemove}) }
                </li>
            ))}
        </ul>
    )
}
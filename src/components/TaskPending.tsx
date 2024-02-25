import { TaskProps, Task } from "./Task"

interface TaskPendingProps extends TaskProps {
    onRemove: (id: number) => void
}

export const TaskPending: React.FC<TaskPendingProps> = ({ task, onCompleted, onRemove }) => {
    return (
        <Task task={task} onCompleted={onCompleted}>
            <button
                className="toggle"
                onClick={() => { onRemove(task.id) }}>
            </button>
        </Task>
    )
}
import { type Task as TaskType } from "../interfaces/task.types"

export interface TaskProps {
    task: TaskType
    onCompleted: (task: Pick<TaskType, 'id' | 'completed'>) => void
    children?: React.ReactNode
}

export const Task: React.FC<TaskProps> = ({ task, onCompleted, children }) => {
    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={(event) => {
            onCompleted({ id: task.id, completed: event.target.checked });
          }}
        />
        <label>{task.title}</label>
        {children}
      </div>
    );
  };


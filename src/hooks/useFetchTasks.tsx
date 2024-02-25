import { useEffect, useState } from 'react'
import { type Task as TaskType } from '../interfaces/task.types'
import { fetchTasks } from '../services/fetchTasks'

export const useFetchTasks = () => {
    const [tasks, setTareas] = useState<TaskType[]>([])

    useEffect(() => {
        const getTareas = async () => {
            const response = await fetchTasks();
            if (!response) return
            setTareas(response)
        }
        getTareas();
    }
        , [])

    const handleCompleted = ({ id, completed }: Pick<TaskType, 'id' | 'completed'>): void => {
        const tareasNuevas = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed
                }
            }
            return task
        })
        setTareas(tareasNuevas)
    }

    const handleRemove = (id: number) => {
        if (!tasks) return
        const tareasActivas = tasks.filter((task) => task.id !== id)
        setTareas(tareasActivas)
    }

    return { tasks, handleCompleted, handleRemove }
}



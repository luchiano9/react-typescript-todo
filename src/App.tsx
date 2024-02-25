import './styles/App.css'
import { Tasks } from './components/Tasks'
import { useFetchTasks } from './hooks/useFetchTasks'

const App = () => {

  const { tasks, handleCompleted, handleRemove } = useFetchTasks()

  return (
    <Tasks
      onCompleted={handleCompleted}
      onRemove={handleRemove}
      tasks={tasks} />
  )
}

export default App

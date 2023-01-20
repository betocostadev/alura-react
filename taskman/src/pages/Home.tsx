import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Stopwatch from '../components/Stopwatch'
import { ITask } from '../types/task'
import HomeStyle from './HomeStyle.module.scss'

const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  const selectTask = (task: ITask) => {
    setSelected(task)
    setTasks((oldTasks) =>
      oldTasks.map((oTask) => ({
        ...oTask,
        selected: oTask.id === task.id ? true : false,
      }))
    )
  }

  return (
    <div className={HomeStyle.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch selected={selected} />
    </div>
  )
}

export default Home

import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Stopwatch from '../components/Stopwatch'
import { ITask } from '../types/task'
import HomeStyle from './HomeStyle.module.scss'

const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      title: 'React',
      time: '01:30:00',
    },
    {
      title: 'TypeScript',
      time: '01:15:00',
    },
    {
      title: 'MUI',
      time: '00:40:00',
    },
  ])

  return (
    <div className={HomeStyle.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  )
}

export default Home

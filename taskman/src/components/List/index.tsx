import { useState } from 'react'
import Item from './Item'
import ListStyle from './ListStyle.module.scss'

const List = () => {
  const [tasks, setTasks] = useState([
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

  const handleAddTask = () => {
    console.log('handleAddTask')
    setTasks([
      ...tasks,
      {
        title: 'MUI',
        time: '00:40:00',
      },
    ])
  }

  return (
    <aside className={ListStyle.taskList}>
      <h2 onClick={handleAddTask}>Today's tasks</h2>
      <ul>
        {tasks
          ? tasks.map((task, index) => (
              <Item key={`${task.title}-${index}`} {...task} />
            ))
          : ''}
      </ul>
    </aside>
  )
}

export default List

import ListStyle from './ListStyle.module.scss'

const List = () => {
  const tasks = [
    {
      title: 'React',
      time: '01:30:00',
    },
    {
      title: 'TypeScript',
      time: '01:15:00',
    },
  ]

  return (
    <aside className={ListStyle.taskList}>
      <h2>Today's tasks</h2>
      <ul>
        {tasks
          ? tasks.map((task, index) => (
              <li key={`${task.title}-${index}`} className={ListStyle.item}>
                <h3>{task.title}</h3>
                <span>{task.time}</span>
              </li>
            ))
          : ''}
      </ul>
    </aside>
  )
}

export default List

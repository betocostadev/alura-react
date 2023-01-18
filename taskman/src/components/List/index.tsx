import Item from './Item'
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
    {
      title: 'MUI',
      time: '00:40:00',
    },
  ]

  return (
    <aside className={ListStyle.taskList}>
      <h2>Today's tasks</h2>
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

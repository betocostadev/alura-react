import Item from './Item'
import ListStyle from './ListStyle.module.scss'
import { ITask } from '../../types/task'

const List = ({ tasks }: { tasks: ITask[] }) => {
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

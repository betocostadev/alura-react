import Item from './Item'
import ListStyle from './ListStyle.module.scss'
import { ITask } from '../../types/task'

interface Props {
  tasks: ITask[]
  selectTask: (selectedTask: ITask) => void
}

const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={ListStyle.taskList}>
      <h2>
        {tasks.length ? "Today's tasks" : 'Add your first task for today'}
      </h2>
      <ul>
        {tasks
          ? tasks.map((task) => (
              <Item selectTask={selectTask} key={task.id} {...task} />
            ))
          : ''}
      </ul>
    </aside>
  )
}

export default List

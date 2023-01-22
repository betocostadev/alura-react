import { ITask } from '../../../types/task'
import ListStyle from '../ListStyle.module.scss'

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void
}

const Item = ({ id, title, time, selected, done, selectTask }: Props) => {
  return (
    <li
      className={`${ListStyle.item} ${
        selected ? ListStyle.itemSelected : done ? ListStyle.itemDone : ''
      }`}
      onClick={() => !done && selectTask({ id, title, time, selected, done })}
    >
      <h3>{title}</h3>
      <span>{time}</span>
      {done && (
        <span className={ListStyle.done} aria-label="Task completed"></span>
      )}
    </li>
  )
}

export default Item

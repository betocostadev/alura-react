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
      onClick={() => selectTask({ id, title, time, selected, done })}
    >
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  )
}

export default Item

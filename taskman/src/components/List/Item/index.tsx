import ListStyle from '../ListStyle.module.scss'

const Item = ({ title, time }: { title: string; time: string }) => {
  return (
    <li className={ListStyle.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  )
}

export default Item

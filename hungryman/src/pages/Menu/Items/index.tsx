import menu from 'utils/items.json'
import Item from './Item'
import style from './Items.module.scss'

const Items = () => {
  return (
    <div className={style.items}>
      {menu.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  )
}

export default Items

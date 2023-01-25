import { useEffect, useState } from 'react'
import menu from 'utils/items.json'
import Item from './Item'
import style from './Items.module.scss'

interface Props {
  search: string
  filter: number | null
  order: string
}

const Items = (props: Props) => {
  const [list, setList] = useState(menu)
  const { search, filter, order } = props

  const testSearch = (title: string, description: string) => {
    const regex = new RegExp(search, 'i')
    return regex.test(title) || regex.test(description)
  }

  const testFilter = (id: number) => {
    if (filter !== null) return filter === id
    return true
  }

  const orderBy = (newList: typeof menu) => {
    switch (order) {
      case 'portion':
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1))
      case 'qty_persons':
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1))
      case 'price':
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1))
      default:
        return newList
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) =>
        testSearch(item.title, item.description) && testFilter(item.category.id)
    )
    setList(orderBy(newList))
  }, [search, filter, order])

  return (
    <div className={style.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Items

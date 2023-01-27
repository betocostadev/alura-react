import styles from './Menu.module.scss'
import { useState } from 'react'
import Search from './Search'
import Filters from './Filters'
import Orderer from './Orderer'
import Items from './Items'
import stylesTheme from 'styles/Theme.module.scss'

type orderOptions = '' | 'portion' | 'qty_persons' | 'price'

const Menu = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<number | null>(null)
  const [order, setOrder] = useState<orderOptions>('')

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Menu</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Orderer order={order} setOrder={setOrder} />
      </div>
      <Items search={search} filter={filter} order={order} />
    </section>
  )
}

export default Menu

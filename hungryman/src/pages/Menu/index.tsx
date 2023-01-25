import styles from './Menu.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { useState } from 'react'
import Search from './Search'
import Filters from './Filters'
import Orderer from './Orderer'
import Items from './Items'

const Menu = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<number | null>(null)
  const [order, setOrder] = useState('')

  return (
    <main>
      <nav className={styles.sidemenu}>
        <Logo title="hungryman logo" />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Killing your hunger since 1986
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Menu</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Orderer order={order} setOrder={setOrder} />
        </div>
        <Items />
      </section>
    </main>
  )
}

export default Menu

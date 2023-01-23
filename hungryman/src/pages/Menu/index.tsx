import styles from './Menu.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { useState } from 'react'
import Search from './Search'
import Filters from './Filters'
const Menu = () => {
  const [search, setSearch] = useState('')

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
          <Filters />
        </div>
      </section>
    </main>
  )
}

export default Menu

import styles from './DefaultPage.module.scss'
import stylesTheme from 'styles/Theme.module.scss'
import { Outlet } from 'react-router-dom'

const DefaultPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Killing your hunger since 1986
        </div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  )
}

export default DefaultPage

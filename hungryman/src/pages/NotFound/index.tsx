import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'
import classNames from 'classnames'
import styles from './NotFound.module.scss'
import stylesTheme from 'styles/Theme.module.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTheme.container]: true,
      })}
    >
      <div className={styles.goBack}>
        <button onClick={() => navigate(-1)}>{'< Go back'}</button>
      </div>
      <NotFoundImage />
      <h3>OOOoooops.... 404</h3>
      <h6>Looks like the page you are trying to access doesn&apos;t exist.</h6>
    </div>
  )
}

export default NotFound

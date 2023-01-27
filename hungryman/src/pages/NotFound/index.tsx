import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'
import classNames from 'classnames'
import styles from './NotFound.module.scss'
import stylesTheme from 'styles/Theme.module.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTheme.container]: true,
      })}
    >
      <div className={styles.goBack}>
        <button onClick={() => goBack()}>{'< Voltar'}</button>
      </div>
      <NotFoundImage />
      <h3>OOOoooops.... 404</h3>
      <h6>Looks like the page you are trying to access doesn&apos;t exist.</h6>
    </div>
  )
}

export default NotFound

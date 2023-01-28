import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styles from './Dish.module.scss'

const Dish = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const { dish } = state

  console.log('params', params)
  console.log('state', state)

  return (
    <div>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'< Go back'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
      </section>
    </div>
  )
}

export default Dish

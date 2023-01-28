import classNames from 'classnames'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styles from './Dish.module.scss'
import menu from 'data/menuitems.json'

const Dish = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const { dish } = state as { dish: typeof menu[0] }

  return (
    <div>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'< Go back'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div>
          <div className={styles.contents}>
            <p className={styles.contents__description}>{dish.description}</p>
            <div className={styles.tags}>
              <div
                className={classNames({
                  [styles.tags__type]: true,
                  [styles[`tags__type__${dish.category.label.toLowerCase()}`]]:
                    true,
                })}
              >
                {dish.category.label}
              </div>
              <div className={styles.tags__portion}>{dish.size}g</div>
              <div className={styles.tags__qtypersons}>
                Serves {dish.serving} person{dish.serving === 1 ? '' : 's'}
              </div>
              <div className={styles.tags__value}>
                US${dish.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dish

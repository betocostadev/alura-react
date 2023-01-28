import styles from './DishTags.module.scss'
import classNames from 'classnames'
import { IDish } from 'types/Dish'

const DishTags = ({ category, size, serving, price }: IDish) => {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__type]: true,
          [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>{size}gr</div>
      <div className={styles.tags__qtypersons}>
        Serves {serving} person{serving !== 1 && 's'}
      </div>
      <div className={styles.tags__value}>U$ {price.toFixed(2)}</div>
    </div>
  )
}

export default DishTags

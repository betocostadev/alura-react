import classNames from 'classnames'
import styles from './Item.module.scss'

interface Props {
  title: string
  description: string
  photo: string
  size: number
  serving: number
  price: number
  id: number
  category: {
    id: number
    label: string
  }
}

const Item = ({
  title,
  description,
  photo,
  size,
  serving,
  price,
  id,
  category,
}: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={`A view of ${title}`} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__portion}>{size}gr</div>
          <div className={styles.item__qtypersons}>
            Serves {serving} person{serving !== 1 && 's'}
          </div>
          <div className={styles.item__value}>U$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

export default Item

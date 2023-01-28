import styles from './Item.module.scss'
import { IDish } from 'types/Dish'
import DishTags from 'components/DishTags'

const Item = ({
  title,
  description,
  photo,
  size,
  serving,
  price,
  id,
  category,
}: IDish) => {
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
        <DishTags
          id={id}
          category={category}
          description={description}
          size={size}
          serving={serving}
          price={price}
        />
      </div>
    </div>
  )
}

export default Item

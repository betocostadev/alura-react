import styles from './Item.module.scss'
import { IDish } from 'types/Dish'
import DishTags from 'components/DishTags'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const goToDish = (id: number) => {
    navigate(`/dish/${id}`, {
      state: { title, description, photo, size, serving, price, id, category },
    })
  }

  return (
    <div className={styles.item} onClick={() => goToDish(id)}>
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

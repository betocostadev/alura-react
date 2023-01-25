import logo from 'assets/logo.svg'
import styles from './Item.module.scss'

// interface Props {
//   title: string
//   description: string
//   photo: string
//   size: number
//   serving: number
//   price: number
//   id: number
// }

const Item = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={logo} alt="item" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>Pasta</h2>
          <p>Pasta description</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__type}>Pasta</div>
          <div className={styles.item__portion}>400gr</div>
          <div className={styles.item__qtypersons}>Serve 2 pessoas</div>
          <div className={styles.item__value}>U$12</div>
        </div>
      </div>
    </div>
  )
}

export default Item

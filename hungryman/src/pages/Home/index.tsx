import menu from 'data/menuitems.json'
import styles from './Home.module.scss'

const Home = () => {
  const recomended = [...menu].sort(() => 0.5 - Math.random()).splice(0, 3)

  return (
    <section>
      <h3 className={styles.title}>Chef recommendations</h3>
      <div className={styles.recommendation}>
        {recomended.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended_image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>See more</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home

import menu from 'data/menuitems.json'
import styles from './Home.module.scss'
import stylesTheme from 'styles/Theme.module.scss'
import ourHome from 'assets/our_home.png'

const Home = () => {
  const recomended = [...menu].sort(() => 0.5 - Math.random()).splice(0, 3)

  return (
    <section>
      <h3 className={stylesTheme.title}>Chef recommendations</h3>
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
      <h3 className={stylesTheme.title}> Our Home </h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Hungrymans Home" />
        <div className={styles.ourHome__address}>
          Bacurin Street, 86 <br /> <br /> New York - NY
        </div>
      </div>
    </section>
  )
}

export default Home

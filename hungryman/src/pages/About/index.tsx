import styles from './About.module.scss'
import stylesTheme from 'styles/Theme.module.scss'
import homeImg from 'assets/home.png'
import pasta1Img from 'assets/pasta1.png'
import pasta2Img from 'assets/pasta2.png'

const About = () => {
  const pastaImages = [pasta1Img, pasta2Img]

  return (
    <section>
      <h3 className={stylesTheme.title}>About Hungryman&apos;s Restaurant</h3>
      <div className={styles.aboutUs}>
        <img src={homeImg} alt="Hungryman Restaurant seen from outside" />
        <div className={styles.aboutUs__text}>
          <p>
            We from Hungryman offer you, dear client, the most tasteful Italian
            Pasta made in New York. We use only the best ingredients to make
            sure our clients always come back to eat with us!
          </p>
          <p>We also offer you a great selection of the finest meat!</p>
          <p>
            Hungryman is aware that many of our clients dont&apos;t want to eat
            meat, so we made a very special selection o Vegan food for you!
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {pastaImages.map((img, index) => (
          <img
            className={styles.images__image}
            key={`img-${index}`}
            src={img}
            alt="Pasta"
          />
        ))}
      </div>
    </section>
  )
}

export default About

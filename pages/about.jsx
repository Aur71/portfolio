import styles from '../styles/About.module.scss'
import { useGlobalContext } from '../context/GlobalContext'

const about = () => {
  const { hoverActive, hoverIndex } = useGlobalContext()

  return (
    <section className={styles.about}>
      <h2>About me</h2>
      <div className={styles.paragraphs}>
        <p>
          My name is Aurel Tumurug, I am a frontend developer located in
          Romania. I am very passionate about everything involving the web and
          the internet.
        </p>

        <p>
          I am an organized person, a problem solver, a perfectionist and an
          independent worker who gets things done. I am also a chess player and
          a big MMA fan.
        </p>

        <p>
          Interested in the entire web spectrum and ready to tackle and project.
        </p>
      </div>


      <div
        data-hover={hoverActive}
        data-index={hoverIndex}
        id={styles.bkPatern}
      ></div>

      <div
        data-hover={hoverActive}
        data-index={hoverIndex}
        id={styles.bkImage}
      ></div>
    </section>
  )
}

export default about

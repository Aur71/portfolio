import styles from '../styles/About.module.scss'
import { useGlobalContext } from '../context/GlobalContext'

const about = () => {
  const { hoverActive, hoverIndex } = useGlobalContext()

  return (
    <section className={styles.about}>
      <h2>About me</h2>
      <div className={styles.paragraphs}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          accusamus nisi voluptatum labore expedita vel harum, corporis dolores
          tempora asperiores recusandae in sunt vero eveniet!
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic itaque
          placeat quos maxime sint exercitationem!
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          repellat?
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

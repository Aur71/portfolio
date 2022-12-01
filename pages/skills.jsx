import styles from '../styles/Skills.module.scss'
import Image from 'next/image'
import { data } from '../data/skills'
import { useGlobalContext } from '../context/GlobalContext'

const skills = () => {
  const { hoverIndex } = useGlobalContext()

  return (
    <section className={styles.skills}>
      <div className={styles.text}>
        <h2 data-index={hoverIndex}>
          Skills & <br /> Experience
        </h2>

        <div className={styles.paragraphs}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            error quidem maiores magnam laudantium, obcaecati deleniti mollitia
            at nesciunt minus molestias aliquid eum. Non optio magnam modi ea
            natus beatae?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            odit a libero dolore. Ipsam hic sapiente fugiat facilis sint
            repudiandae?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            eius, amet asperiores earum hic sit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            dolorum?
          </p>
        </div>
      </div>

      <div className={styles.tools}>
        {data.map((item) => {
          return <Image key={item.id} src={item.img} alt={item.name} />
        })}
      </div>
    </section>
  )
}

export default skills

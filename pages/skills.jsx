import styles from '../styles/Skills.module.scss'
import Image from 'next/image'
import { data } from '../data/skills'
import { useGlobalContext } from '../context/GlobalContext'
import Link from 'next/link'

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
            I've begun my journey as a frontend developer in the summer of 2022.
            Since then i`ve done a bit of freelance, worked on open source
            projects and always tried to push my skills to the next level.
          </p>

          <p>
            I create production ready websites that are responsive, fast, easy
            to use and highly interactive. The main technologies I use are html,
            css, javascript, sass, react and nextjs.
          </p>

          <p>
            Right now I'm improving what I already know and also diving into the
            backend world.
          </p>

          <p>
            <Link href='/contact'>Contact me</Link> for more details.
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

import styles from '../styles/Work.module.scss'
import { projects } from '../data/projects'
import Image from 'next/image'
import Head from 'next/head'

const work = () => {
  return (
    <section className={styles.work}>
      <Head>
        <title>Work</title>
        <meta name='description' content='Projects made by Tumurug Aurel.' />
      </Head>

      <div className={styles.gridContainer}>
        {projects.map((project) => {
          const { id, name, image, live, code, about } = project

          return (
            <div key={id} className={styles.gridItem}>
              <div className={styles.imgContainer}>
                <Image src={image} alt={name} />
              </div>

              <div className={styles.btnContainer}>
                <a target='_blank' href={live}>
                  live
                </a>
                <a target='_blank' href={code}>
                  code
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default work

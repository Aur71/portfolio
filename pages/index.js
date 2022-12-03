import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useGlobalContext } from '../context/GlobalContext'
import Head from 'next/head'

export default function Home() {
  const { hoverActive, hoverIndex } = useGlobalContext()

  return (
    <section className={styles.home}>
      <Head>
        <title>Aurel's Portfolio</title>
        <meta name='description' content='Tumurug Aurel`s personal portfolio' />
      </Head>

      <h1>
        Hi, <br /> I'm Aurel
      </h1>

      <p>Front End Developer</p>

      <Link href='/work'>View my work</Link>

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

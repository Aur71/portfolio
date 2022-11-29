import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <main className={styles.menu}>
      <section>
        <Link href='#' onMouseOver={() => setActiveIndex(0)}>
          Work
        </Link>

        <Link href='#' onMouseOver={() => setActiveIndex(1)}>
          Resume
        </Link>

        <Link href='#' onMouseOver={() => setActiveIndex(2)}>
          About
        </Link>

        <Link href='#' onMouseOver={() => setActiveIndex(3)}>
          Contact
        </Link>
      </section>

      <div data-active-index={activeIndex} id={styles.menuBkPatern}></div>
      <div data-active-index={activeIndex} id={styles.bkImage}></div>

      <section>
        <h1>Hello</h1>
      </section>
    </main>
  )
}

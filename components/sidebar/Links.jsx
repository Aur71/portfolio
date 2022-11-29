import styles from '../../styles/Sidebar.module.scss'
import Link from 'next/link'
import { links } from '../../data/links'

const Links = () => {
  return (
    <ul className={styles.linksContainer}>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Links

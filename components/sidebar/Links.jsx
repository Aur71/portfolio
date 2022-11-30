import styles from '../../styles/Sidebar.module.scss'
import Link from 'next/link'
import { links } from '../../data/links'
import { useGlobalContext } from '../../context/GlobalContext'

const Links = () => {
  const { setHoverActive, setHoverIndex } = useGlobalContext()

  const handleHover = (index) => {
    setHoverActive(true)
    setHoverIndex(index)
  }

  return (
    <ul className={styles.linksContainer}>
      {links.map((link, index) => {
        return (
          <li
            key={link.id}
            onMouseOver={() => handleHover(index)}
            onMouseLeave={() => setHoverActive(false)}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Links

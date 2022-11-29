import styles from '../../styles/Sidebar.module.scss'
import Logo from './Logo'
import Links from './Links'
import Social from './Social'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo />

      <Links />

      <Social />
    </aside>
  )
}

export default Sidebar

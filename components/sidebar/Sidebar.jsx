import styles from '../../styles/Sidebar.module.scss'
import Logo from './Logo'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo />

      <ul className={styles.linksContainer}></ul>

      <ul className={styles.socialContainer}></ul>
    </aside>
  )
}

export default Sidebar

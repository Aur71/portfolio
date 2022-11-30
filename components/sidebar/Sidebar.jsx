import styles from '../../styles/Sidebar.module.scss'
import Logo from './Logo'
import Links from './Links'
import Social from './Social'
import { useGlobalContext } from '../../context/GlobalContext'

const Sidebar = () => {
  const { showSidebar } = useGlobalContext()

  return (
    <aside
      data-open={showSidebar}
      className={`${styles.sidebar} ${showSidebar && styles.active}`}
    >
      <Logo />

      <Links />

      <Social />
    </aside>
  )
}

export default Sidebar

import styles from '../styles/ToggleBtn.module.scss'
import { useGlobalContext } from '../context/GlobalContext'

const ToggleBtn = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext()

  return (
    <button
      className={`${styles.btn} ${showSidebar && styles.active}`}
      onClick={() => setShowSidebar(!showSidebar)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default ToggleBtn

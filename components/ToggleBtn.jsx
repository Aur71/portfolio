import styles from '../styles/ToggleBtn.module.scss'
import { useGlobalContext } from '../context/GlobalContext'

const ToggleBtn = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext()

  return (
    <div
      className={`${styles.btn} ${showSidebar && styles.active}`}
      onClick={() => setShowSidebar(!showSidebar)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default ToggleBtn

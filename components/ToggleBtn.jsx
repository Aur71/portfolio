import styles from '../styles/ToggleBtn.module.scss'
import { useState } from 'react'

const ToggleBtn = () => {
  const [showSidebar, setShowSidebar] = useState(false)

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

import styles from '../../styles/Sidebar.module.scss'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href='/' data-text='A'>
        A
      </Link>
    </div>
  )
}

export default Logo

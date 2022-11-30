import styles from '../styles/Work.module.scss'

const work = () => {
  return (
    <section className={styles.work}>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div className={styles.btnContainer}>
            <a href='#'>live</a>
            <a href='#'>code</a>
            <button>about</button>
          </div>
        </div>

        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}></div>
      </div>
    </section>
  )
}

export default work

import styles from '../../styles/Sidebar.module.scss'
import { social } from '../../data/social'
import { useState, useEffect } from 'react'

const Social = () => {
  const [message, setMessage] = useState(false)

  const handleCopy = (text) => {
    setMessage(true)
    navigator.clipboard.writeText(text)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [message])

  return (
    <ul className={styles.socialContainer}>
      <span className={`${message && styles.active}`}>COPIED</span>
      {social.map((item) => {
        if (item.name === 'email') {
          return (
            <li key={item.id}>
              <button onClick={() => handleCopy('tumuruga17@gmail.com')}>
                {item.icon}
              </button>
            </li>
          )
        }

        return (
          <li key={item.id}>
            <a target='_blank' href={item.path}>
              {item.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Social

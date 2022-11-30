import styles from '../../styles/Sidebar.module.scss'
import { social } from '../../data/social'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Social = () => {
  return (
    <ul className={styles.socialContainer}>
      {social.map((item) => {
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

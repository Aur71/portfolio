import styles from '../styles/Contact.module.scss'
import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { MdEmail } from 'react-icons/md'

const contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef()
  const [sendMessage, setSendMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4rxply3',
        'template_q5hwy3d',
        form.current,
        '-UVdtggYeFOqoYISa'
      )
      .then(
        (result) => {
          console.log(result.text)
          window.alert(`Message sent`)
        },
        (error) => {
          console.log(error.text)
          window.alert(`Error: ${error}`)
        }
      )

    setSendMessage(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSendMessage(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [sendEmail, sendMessage])

  return (
    <div className={styles.contact}>
      <h2>Contact me</h2>

      <form onSubmit={sendEmail} ref={form}>
        <div>
          <div className={styles.nameWrapper}>
            <input
              type='text'
              placeholder='Name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              name='from_name'
            />

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.emailWrapper}>
            <input
              type='email'
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email_id'
            />

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={styles.messageWrapper}>
          <textarea
            name='message'
            placeholder='Message'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.btnWrapper}>
          <MdEmail
            className={`${styles.icon} ${sendMessage && styles.active}`}
          />
          <button type='submit'>Send </button>
        </div>
      </form>
    </div>
  )
}

export default contact

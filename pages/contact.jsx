import styles from '../styles/Contact.module.scss'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef()

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

    setName('')
    setEmail('')
    setMessage('')
  }

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

        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default contact

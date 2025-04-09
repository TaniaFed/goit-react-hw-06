import styles from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList({ contacts = [], onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}
